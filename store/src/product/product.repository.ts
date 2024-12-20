import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductFilterOptionsDto } from './dto/productFilterOptions.dto';
import { CreateProductDto } from './dto/createProduct.dto';

@Injectable()
export class ProductRepository {
  private readonly repository: Repository<Product>;

  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(Product);
  }

  async findById(id: string): Promise<Product | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findAll(where?: ProductFilterOptionsDto): Promise<Product[]> {
    return this.repository.find({ where });
  }

  async save(productData: CreateProductDto): Promise<Product> {
    return this.repository.save(productData);
  }

  async update(
    id: string,
    productData: Partial<Product>,
  ): Promise<UpdateResult> {
    return this.repository.update(id, productData);
  }

  async delete(id: string): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
