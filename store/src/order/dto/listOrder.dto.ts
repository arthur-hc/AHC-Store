import { ListUserDto } from '../../user/dto/listUser.dto';
import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/orderItem.entity';

export class ListOrderDto {
  constructor(order: Order) {
    const { id, status, totalValue, user, items } = order;

    this.id = id;
    this.status = status;
    this.totalValue = totalValue;
    this.user = new ListUserDto(user);
    this.items = items;
  }

  id?: string;
  status: string;
  totalValue: number;
  user: ListUserDto;
  items: OrderItem[];
}
