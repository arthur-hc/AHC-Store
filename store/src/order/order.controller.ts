import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateOrderDto } from './dto/createOrder.dto';
import { ListOrderDto } from './dto/listOrder.dto';
import { OrderFilterOptionsDto } from './dto/orderFilterOptions.dto';
import { Order } from './entities/order.entity';
import { OrderService } from './order.service';
import { UUIDDto } from '../common/dto/UUID.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() orderData: CreateOrderDto): Promise<Order> {
    return await this.orderService.create(orderData);
  }

  @Get(':id')
  async findOne(@Param() { id }: UUIDDto): Promise<ListOrderDto> {
    return this.orderService.findOne(id);
  }

  @Get()
  async findAll(
    @Query() filters: OrderFilterOptionsDto,
  ): Promise<ListOrderDto[]> {
    return await this.orderService.findAll(filters);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
  //   return this.orderService.update(+id, updateOrderDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.orderService.remove(+id);
  // }
}
