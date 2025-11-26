import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';
import { Pagination } from 'src/paginate/pagination';
import { UserListQueryDto } from './dt/user-list-query.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsersList(user: User, listQueryDto: UserListQueryDto): Promise<Pagination<User>>;
}
