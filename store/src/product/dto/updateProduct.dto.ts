import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ProductFeature } from '../entities/productFeature.entity';
import { ProductImage } from '../entities/productImage.entity';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  userId?: string;

  @IsInt()
  @IsOptional()
  price?: number;

  @IsInt()
  @IsOptional()
  quantity?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @IsOptional()
  @Type(() => ProductFeature)
  features?: ProductFeature[];

  @IsArray()
  @ValidateNested({ each: true })
  @IsOptional()
  @Type(() => ProductImage)
  images?: ProductImage[];

  @IsString()
  @IsOptional()
  category?: string;

  @IsDateString()
  @IsOptional()
  creationDate?: string;

  @IsDateString()
  @IsOptional()
  updateDate?: string;
}
