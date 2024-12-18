import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/createOrder.dto';
import { OrderFilterOptionsDto } from './dto/orderFilterOptions.dto';

@Injectable()
export class OrderRepository {
  private readonly repository: Repository<Order>;

  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(Order);
  }

  async findById(id: string): Promise<Order | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findAll(where?: OrderFilterOptionsDto): Promise<Order[]> {
    return this.repository.find({ where });
  }

  async save(orderData: CreateOrderDto): Promise<Order> {
    return this.repository.save(orderData);
  }

  async update(id: string, orderData: Partial<Order>): Promise<UpdateResult> {
    return this.repository.update(id, orderData);
  }

  async delete(id: string): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
