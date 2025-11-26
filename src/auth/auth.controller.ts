import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/auth/dto/login.dto';
import { AuthResponse } from 'src/interfaces/auth-response.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signup')
  async registerUser(@Body() dto: LoginDto): Promise<AuthResponse> {
    return this.authService.registerUser(dto);
  }

  @Post('login')
  async loginUser(@Body() dto: LoginDto): Promise<AuthResponse> {
    return this.authService.loginUser(dto);
  }

  @Post("logout")
  async logoutUser(): Promise<any>{
    return ""
  }
}
