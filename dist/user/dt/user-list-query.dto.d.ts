import { ListQueryDto } from "src/common/dto/list-query.dto";
declare const UserListQueryDto_base: import("@nestjs/common").Type<Partial<ListQueryDto>>;
export declare class UserListQueryDto extends UserListQueryDto_base {
    keyword?: string;
}
export {};
