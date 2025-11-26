import { User } from 'src/entities/user.entity';
import { UserRepository } from 'src/repositories/user.repository';
import { LoginDto } from '../auth/dto/login.dto';
import { Pagination } from 'src/paginate/pagination';
import { UserListQueryDto } from './dt/user-list-query.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    createUser(dto: LoginDto): Promise<User>;
    findByEmail(dto: LoginDto): Promise<User>;
    validateUser(dto: LoginDto): Promise<User>;
    getAllUsers(user: User, listQueryDto: UserListQueryDto): Promise<Pagination<User>>;
}
