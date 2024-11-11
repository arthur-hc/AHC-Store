import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}
  async create(productData: CreateProductDto) {
    return await this.productRepository.save(productData);
  }

  async findAll() {
    return await this.productRepository.list();
  }
}
