import { User } from 'src/entities/user.entity';
import { UserRepository } from 'src/repositories/user.repository';
import { LoginDto } from '../auth/dto/login.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    createUser(dto: LoginDto): Promise<User>;
    findByEmail(dto: LoginDto): Promise<User>;
    validateUser(dto: LoginDto): Promise<User>;
    getAllUsers(user: User): Promise<User[]>;
}
