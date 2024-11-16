import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

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
