"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entities/user.entity");
const user_repository_1 = require("../repositories/user.repository");
const bcrypt = __importStar(require("bcrypt"));
const auth_user_decorator_1 = require("../common/auth-user.decorator");
const pagination_1 = require("../paginate/pagination");
const user_list_query_dto_1 = require("./dt/user-list-query.dto");
let UserService = class UserService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(dto) {
        const existingUser = await this.userRepository
            .createQueryBuilder('app_user')
            .where({ email: dto.email })
            .getOne();
        if (existingUser) {
            throw new common_1.ConflictException('User with same email is already registered');
        }
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(dto.password, salt);
        return this.userRepository.save({ email: dto.email, password: hashed });
    }
    async findByEmail(dto) {
        const { email } = dto;
        const userEmail = await this.userRepository.findOne({
            where: { email: email },
            select: ['password', 'email', 'uid'],
        });
        return userEmail;
    }
    async validateUser(dto) {
        const { password } = dto;
        const existingUser = await this.findByEmail(dto);
        if (!existingUser) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            throw new common_1.UnauthorizedException('Password does not match');
        }
        return existingUser;
    }
    async getAllUsers(user, listQueryDto) {
        const page = listQueryDto.page || 1;
        const limit = listQueryDto.pagesize || 25;
        const baseQuery = this.userRepository
            .createQueryBuilder('users')
            .where({
            'user.sub_id': 9025,
            'user.created_by': 0,
            'user.is_delete': 0,
        })
            .leftJoin('app_stores', 'user.store_id', 'app_stores.id')
            .leftJoin('app_user_roles', 'user.role_id', 'app_user_roles.id')
            .select([
            'users.name as name',
            'users.uid as id',
            'users.email',
            'users.phone',
            'users.status',
            'users.role_id',
            'users.store_id',
            'users.two_factor',
            'users.sub_id',
            'users.commission_setting',
            'app_user_stores.name as store_name',
            'app_user_roles.name as role_name',
            'app_user_store.alt_name as alt_name',
        ]);
        const countPromise = baseQuery.clone().select('COUNT(DISTINCT users.id');
        return new pagination_1.Pagination({
            total: 50,
            limit: 10,
            page: 1,
            next: 2,
            records: [],
            previous: 0,
        });
    }
};
exports.UserService = UserService;
__decorate([
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, user_list_query_dto_1.UserListQueryDto]),
    __metadata("design:returntype", Promise)
], UserService.prototype, "getAllUsers", null);
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
//# sourceMappingURL=user.service.js.map