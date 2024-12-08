import { ListUserDto } from '../../user/dto/listUser.dto';
import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/orderItem.entity';

export class ListOrderDto {
  constructor(order: Order) {
    this.id = order.id;
    this.status = order.status;
    this.totalValue = order.totalValue;
    this.user = new ListUserDto(order.user);
    this.items = order.items;
  }

  id: string;
  status: string;
  totalValue: number;
  user: ListUserDto;
  items: OrderItem[];
}
