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
exports.User = void 0;
const typeorm_1 = require("typeorm");
let User = class User {
    uid;
    email;
    username;
    password;
    disable_all_notifications;
    address;
    phone;
    mobile;
    status;
    supper;
    sub_id;
    role_id;
    store_id;
    zip;
    country;
    city;
    state;
    hour_rate;
    accesspin;
    stores;
    is_delete;
    working_days;
    salary;
    stores_for_assignment;
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'uid', type: 'int' }),
    __metadata("design:type", Number)
], User.prototype, "uid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fullname', nullable: true, length: 20 }),
    (0, typeorm_1.Column)('varchar', { name: 'email', nullable: true, length: 255 }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'username', nullable: true, length: 32 }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'password', nullable: true, length: 255 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'disable_all_notifications',
        nullable: true,
    }),
    __metadata("design:type", Number)
], User.prototype, "disable_all_notifications", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'address', nullable: true, length: 255 }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'phone', nullable: true, length: 32 }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mobile', nullable: true, length: 32 }),
    __metadata("design:type", String)
], User.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'status', nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'supper', nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "supper", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'sub_id', nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "sub_id", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'role_id', nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "role_id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'store_id', nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "store_id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'zip', nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "zip", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'counrty', nullable: true, length: 80 }),
    __metadata("design:type", String)
], User.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'city', nullable: true, length: 80 }),
    __metadata("design:type", String)
], User.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'state', nullable: true, length: 80 }),
    __metadata("design:type", String)
], User.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'hour_rate', nullable: true, length: 80 }),
    __metadata("design:type", String)
], User.prototype, "hour_rate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'accesspin', nullable: true, length: 80 }),
    __metadata("design:type", String)
], User.prototype, "accesspin", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'stores', nullable: true, length: 80 }),
    __metadata("design:type", String)
], User.prototype, "stores", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'is_delete', nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "is_delete", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'working_days', nullable: true, length: 255 }),
    __metadata("design:type", String)
], User.prototype, "working_days", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'salary', nullable: true, length: 80 }),
    __metadata("design:type", String)
], User.prototype, "salary", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'stores_for_assignment',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], User.prototype, "stores_for_assignment", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('app_user')
], User);
//# sourceMappingURL=user.entity.js.map