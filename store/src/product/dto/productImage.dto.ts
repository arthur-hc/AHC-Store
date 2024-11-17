import { IsString } from 'class-validator';
import { ProductImage } from '../entities/productImage.entity';

export class ProductImageDto extends ProductImage {
  @IsString()
  url: string;

  @IsString()
  description: string;
}
