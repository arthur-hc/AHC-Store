import {
  IsString,
  IsNumber,
  IsArray,
  ValidateNested,
  IsDateString,
  IsNotEmpty,
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
  @IsNotEmpty()
  name: string;

  @IsNumber()
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
  @Type(() => FeatureDto)
  features: FeatureDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImageDto)
  images: ImageDto[];

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsDateString()
  creationDate: string;

  @IsDateString()
  updateDate: string;
}
