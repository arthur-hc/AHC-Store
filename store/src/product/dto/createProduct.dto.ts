import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ProductFeatureDto } from './productFeature.dto';
import { ProductImageDto } from './productImage.dto';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductFeatureDto)
  features: ProductFeatureDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductImageDto)
  images: ProductImageDto[];

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsDateString()
  creationDate: string;

  @IsDateString()
  updateDate: string;
}
