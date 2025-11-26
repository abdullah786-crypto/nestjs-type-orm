import { AuthService } from './auth.service';
import { LoginDto } from 'src/auth/dto/login.dto';
import { AuthResponse } from 'src/interfaces/auth-response.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerUser(dto: LoginDto): Promise<AuthResponse>;
    loginUser(dto: LoginDto): Promise<AuthResponse>;
    logoutUser(): Promise<any>;
}
