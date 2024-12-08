import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString, IsUUID } from 'class-validator';

export class ProductFilterOptionsDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  id?: string;

  @IsOptional()
  @IsUUID()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  price?: number;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  quantity?: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  category?: string;
}
