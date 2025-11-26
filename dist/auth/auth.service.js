"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    userService;
    jwtService;
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async registerUser(dto) {
        const registeredUser = await this.userService.createUser(dto);
        if (!registeredUser) {
            throw new common_1.InternalServerErrorException('Failed to create user...');
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
    async loginUser(dto) {
        const user = await this.userService.validateUser(dto);
        if (!user) {
            throw new common_1.NotFoundException('No any account register with this email and password');
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map