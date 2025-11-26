import { Body, Controller, Get } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';
import { AuthUser } from 'src/common/auth-user.decorator';
import { Pagination } from 'src/paginate/pagination';
import { UserListQueryDto } from './dt/user-list-query.dto';

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('listing')
  async getAllUsersList(@AuthUser() user: User, @Body() listQueryDto: UserListQueryDto): Promise<Pagination<User>> {
    return this.userService.getAllUsers(user, listQueryDto)
  }
}
