import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}
  async create(productData) {
    return await this.productRepository.save(productData);
  }

  async findAll() {
    return await this.productRepository.list();
  }
}
