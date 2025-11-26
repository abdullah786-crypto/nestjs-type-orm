import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';

export type sortOrder = 'ASC' | 'DESC';

export class ListQueryDto {
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @Min(1)
  pagesize?: number;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @Min(1)
  @IsNumber()
  page?: number;

  @IsOptional()
  sort_column: string;

  @IsOptional()
  sort_order: sortOrder;
}
