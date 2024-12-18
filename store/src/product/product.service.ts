import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateProductDto } from './dto/createProduct.dto';
import { ListProductDto } from './dto/listProduct.dto';
import { ProductFilterOptionsDto } from './dto/productFilterOptions.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}
  async create(productData: CreateProductDto): Promise<ListProductDto> {
    const product = await this.productRepository.save(productData);
    return new ListProductDto(product);
  }

  async findById(id: string): Promise<ListProductDto | null> {
    const product = await this.productRepository.findById(id);
    if (!product)
      throw new NotFoundException({
        message: 'Product not found',
      });
    return new ListProductDto(product);
  }

  async findAll(where?: ProductFilterOptionsDto): Promise<ListProductDto[]> {
    const products = await this.productRepository.findAll(where);
    return products.map((product) => new ListProductDto(product));
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
