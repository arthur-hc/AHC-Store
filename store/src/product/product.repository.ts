import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductRepository {
  private readonly repository: Repository<Product>;

  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(Product);
  }

  async findById(id: string) {
    return this.repository.find({ where: { id } });
  }

  async findAll() {
    return this.repository.find();
  }

  async save(productData: Product) {
    return this.repository.save(productData);
  }

  async update(id: string, productData: Partial<Product>) {
    return this.repository.update(id, productData);
  }

  async delete(id: string) {
    return this.repository.delete(id);
  }
}
