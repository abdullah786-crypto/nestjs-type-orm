import { Controller, Get } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';
import { AuthUser } from 'src/common/auth-user.decorator';

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('listing')
  async getAllUsersList(@AuthUser() user: User): Promise<User[]> {
    return this.userService.getAllUsers(user)
  }
}
