import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsersList(user: User): Promise<User[]>;
}
