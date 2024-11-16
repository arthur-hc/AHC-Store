import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class productFilterOptionsDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
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
