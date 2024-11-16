import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dto/createProduct.dto';
import { Product } from './entities/product.entity';
import { productFilterOptionsDto } from './dto/productFilterOptions.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}
  async create(productData: CreateProductDto): Promise<Product> {
    return await this.productRepository.save(productData);
  }

  async findById(id: string): Promise<Product> {
    return await this.productRepository.findById(id);
  }

  async findAll(where?: productFilterOptionsDto): Promise<Product[]> {
    return await this.productRepository.findAll(where);
  }

  async update(
    id: string,
    productData: UpdateProductDto,
  ): Promise<UpdateResult> {
    return await this.productRepository.update(id, productData);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.productRepository.delete(id);
  }
}
