import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UserRepository } from 'src/repositories/user.repository';
import * as bcrypt from 'bcrypt';
import { LoginDto } from '../auth/dto/login.dto';
import { AuthUser } from 'src/common/auth-user.decorator';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(dto: LoginDto): Promise<User> {
    const existingUser = await this.userRepository
      .createQueryBuilder('app_user')
      .where({ email: dto.email })
      .getOne();
    if (existingUser) {
      throw new ConflictException('User with same email is already registered');
    }
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(dto.password, salt);
    return this.userRepository.save({ email: dto.email, password: hashed });
  }

  async findByEmail(dto: LoginDto): Promise<User> {
    const { email } = dto;
    const userEmail = await this.userRepository.findOne({ where: { email: email }, select: ["password", "email", "uid"] });
    return userEmail
  }

  async validateUser(dto: LoginDto): Promise<User> {
    const { password } = dto;
    const existingUser = await this.findByEmail(dto);
    if (!existingUser) {
      throw new UnauthorizedException("Invalid email or password")
    }
    
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      throw new UnauthorizedException('Password does not match');
    }
    return existingUser;
  }

  async getAllUsers(@AuthUser() user: User): Promise<User[]> {
    console.log('value of user is', user)
    return await this.userRepository.find();
  }
}
