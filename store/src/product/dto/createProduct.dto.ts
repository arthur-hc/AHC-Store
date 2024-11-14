import {
  IsString,
  IsNumber,
  IsArray,
  ValidateNested,
  IsDateString,
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

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  availableQuantity: number;

  @IsString()
  description: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FeatureDto)
  features: FeatureDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImageDto)
  images: ImageDto[];

  @IsString()
  category: string;

  @IsDateString()
  creationDate: string;

  @IsDateString()
  updateDate: string;
}
