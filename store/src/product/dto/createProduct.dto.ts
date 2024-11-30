import { Expose, Transform, Type } from 'class-transformer';
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
import { User } from '../../user/entities/user.entity';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Expose({ name: 'userId', toClassOnly: true })
  @IsNotEmpty()
  @Transform(
    ({ value }) => {
      const user = new User();
      user.id = value;
      return user;
    },
    { toClassOnly: true },
  )
  user: User;

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
