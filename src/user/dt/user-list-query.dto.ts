import { PartialType } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { ListQueryDto } from "src/common/dto/list-query.dto";

export class UserListQueryDto extends PartialType(ListQueryDto){
    @IsOptional()
    @IsString()
    keyword?: string
}