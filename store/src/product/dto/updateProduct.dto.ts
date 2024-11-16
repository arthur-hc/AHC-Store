import {
  IsString,
  IsNumber,
  IsArray,
  ValidateNested,
  IsDateString,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

class FeatureDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}

class ImageDto {
  @IsString()
  url: string;

  @IsString()
  description: string;
}

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  userId?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsNumber()
  @IsOptional()
  quantity?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @IsOptional()
  @Type(() => FeatureDto)
  features?: FeatureDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @IsOptional()
  @Type(() => ImageDto)
  images?: ImageDto[];

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
