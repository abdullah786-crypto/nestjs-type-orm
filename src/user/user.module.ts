import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from 'src/repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { AppDataSource } from 'src/data-source';

const COMMON_IMPORTS = [UserService, UserRepository];
@Module({
  imports: [TypeOrmModule.forFeature([User], AppDataSource)],
  exports: [...COMMON_IMPORTS, TypeOrmModule],
  controllers: [UserController],
  providers: [...COMMON_IMPORTS],
})
export class UserModule {}
