import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/auth/dto/login.dto';
import { AuthResponse } from 'src/interfaces/auth-response.interface';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    registerUser(dto: LoginDto): Promise<AuthResponse>;
    loginUser(dto: LoginDto): Promise<AuthResponse>;
}
