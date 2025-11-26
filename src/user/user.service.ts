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
import { Pagination } from 'src/paginate/pagination';
import { ListQueryDto } from 'src/common/dto/list-query.dto';
import { UserListQueryDto } from './dt/user-list-query.dto';

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
    const userEmail = await this.userRepository.findOne({
      where: { email: email },
      select: ['password', 'email', 'uid'],
    });
    return userEmail;
  }

  async validateUser(dto: LoginDto): Promise<User> {
    const { password } = dto;
    const existingUser = await this.findByEmail(dto);
    if (!existingUser) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      throw new UnauthorizedException('Password does not match');
    }
    return existingUser;
  }

  async getAllUsers(@AuthUser() user: User, listQueryDto: UserListQueryDto): Promise<Pagination<User>> {

    const page = listQueryDto.page || 1
    const limit = listQueryDto.pagesize || 25

    const baseQuery = this.userRepository
      .createQueryBuilder('users')
      .where({
        'user.sub_id': 9025,
        'user.created_by': 0,
        'user.is_delete': 0,
      })
      .leftJoin('app_stores', 'user.store_id', 'app_stores.id')
      .leftJoin('app_user_roles', 'user.role_id', 'app_user_roles.id')
      .select([
        'users.name as name',
        'users.uid as id',
        'users.email',
        'users.phone',
        'users.status',
        'users.role_id',
        'users.store_id',
        'users.two_factor',
        'users.sub_id',
        'users.commission_setting',
        'app_user_stores.name as store_name',
        'app_user_roles.name as role_name',
        'app_user_store.alt_name as alt_name',
      ]);

    const countPromise = baseQuery.clone().select('COUNT(DISTINCT users.id')

    

    return new Pagination<User>({
      total: 50,
      limit: 10,
      page: 1,
      next: 2,
      records: [],
      previous: 0,
    });
  }
}
