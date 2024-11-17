import { IsString } from 'class-validator';
import { ProductFeature } from '../entities/productFeature.entity';

export class ProductFeatureDto extends ProductFeature {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
