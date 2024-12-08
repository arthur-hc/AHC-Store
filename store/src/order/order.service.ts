import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/createOrder.dto';
import { ListOrderDto } from './dto/listOrder.dto';
import { OrderFilterOptionsDto } from './dto/orderFilterOptions.dto';
import { Order } from './entities/order.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}
  async create(createData: CreateOrderDto): Promise<Order> {
    const order = await this.orderRepository.save(createData);
    return order;
  }

  async findOne(id: string): Promise<ListOrderDto> {
    const order = await this.orderRepository.findById(id);
    return new ListOrderDto(order);
  }

  async findAll(filters: OrderFilterOptionsDto): Promise<ListOrderDto[]> {
    const orders = await this.orderRepository.findAll(filters);
    return orders.map((order) => new ListOrderDto(order));
  }

  // async update(id: number, updateOrderDto: UpdateOrderDto) {
  //   return `This action updates a #${id} order`;
  // }

  // async remove(id: number) {
  //   return `This action removes a #${id} order`;
  // }
}
