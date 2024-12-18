import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/createOrder.dto';
import { ListOrderDto } from './dto/listOrder.dto';
import { OrderFilterOptionsDto } from './dto/orderFilterOptions.dto';
import { Order } from './entities/order.entity';
import { OrderRepository } from './order.repository';
import { UpdateOrderDto } from './dto/updateOrder.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}
  async create(orderData: CreateOrderDto): Promise<Order> {
    const order = await this.orderRepository.save(orderData);
    return order;
  }

  async findOne(id: string): Promise<ListOrderDto | null> {
    const order = await this.orderRepository.findById(id);
    if (!order) throw new NotFoundException({ message: 'Order not found' });
    return new ListOrderDto(order);
  }

  async findAll(filters: OrderFilterOptionsDto): Promise<ListOrderDto[]> {
    const orders = await this.orderRepository.findAll(filters);
    return orders.map((order) => new ListOrderDto(order));
  }

  async update(id: string, orderData: UpdateOrderDto): Promise<UpdateResult> {
    return await this.orderRepository.update(id, orderData);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.orderRepository.delete(id);
  }
}
