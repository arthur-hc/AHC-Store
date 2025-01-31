import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/createOrder.dto';
import { ListOrderDto } from './dto/listOrder.dto';
import { OrderFilterOptionsDto } from './dto/orderFilterOptions.dto';
import { Order } from './entities/order.entity';
import { OrderService } from './order.service';
import { UUIDDto } from '../common/dto/uuid.dto';
import { UpdateOrderDto } from './dto/updateOrder.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() orderData: CreateOrderDto): Promise<Order> {
    return await this.orderService.create(orderData);
  }

  @Get('/:id')
  @UseInterceptors(CacheInterceptor)
  async findOne(@Param() { id }: UUIDDto): Promise<ListOrderDto | null> {
    return this.orderService.findOne(id);
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  async findAll(
    @Query() filters: OrderFilterOptionsDto,
  ): Promise<ListOrderDto[]> {
    return await this.orderService.findAll(filters);
  }

  @Patch('/:id')
  update(
    @Param() { id }: UUIDDto,
    @Body() updateOrderDto: UpdateOrderDto,
  ): Promise<UpdateResult> {
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete('/:id')
  remove(@Param() { id }: UUIDDto): Promise<DeleteResult> {
    return this.orderService.remove(id);
  }
}
