import { ListUserDto } from '../../user/dto/listUser.dto';
import { Product } from '../entities/product.entity';
import { ProductFeature } from '../entities/productFeature.entity';
import { ProductImage } from '../entities/productImage.entity';

export class ListProductDto {
  constructor(product: Product) {
    const { id, name, description, price, features, images, user } = product;
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.features = features;
    this.images = images;
    this.user = new ListUserDto(user);
  }
  id: string;
  name: string;
  description: string;
  price: number;
  features: ProductFeature[];
  images: ProductImage[];
  user: ListUserDto;
}
