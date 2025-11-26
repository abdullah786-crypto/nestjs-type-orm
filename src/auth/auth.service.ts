import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/auth/dto/login.dto';
import { AuthResponse } from 'src/interfaces/auth-response.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(dto: LoginDto): Promise<AuthResponse> {
    const registeredUser = await this.userService.createUser(dto);
    
    if (!registeredUser) {
      throw new InternalServerErrorException('Failed to create user...');
    }
    const payload = {
      email: registeredUser.email,
      sub: registeredUser.uid,
    };
    const token = this.jwtService.sign(payload);
    return {
      success: true,
      message: 'User register successfully',
      token: token,
    };
  }

  async loginUser(dto: LoginDto): Promise<AuthResponse> {
    const user = await this.userService.validateUser(dto);
    if (!user) {
      throw new NotFoundException(
        'No any account register with this email and password',
      );
    }
    const payload = {
      email: user.email,
      sub: user.uid,
    };
    const token = this.jwtService.sign(payload);
    return {
      success: true,
      message: 'User logged in successfully',
      token: token,
    };
  }
}
