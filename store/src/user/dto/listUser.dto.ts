import { Product } from '../../product/entities/product.entity';
import { User } from '../entities/user.entity';

export class ListUserDto {
  constructor(user: User) {
    const { id, name, email, products } = user;
    this.id = id;
    this.name = name;
    this.email = email;
    this.products = products;
  }

  id: string;
  name: string;
  email: string;
  products?: Product[];
}
