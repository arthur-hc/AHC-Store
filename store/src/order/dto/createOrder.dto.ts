import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import OrderStatusEnum from '../Enum/OrderEnum';
import { User } from '../../user/entities/user.entity';
import { Transform } from 'class-transformer';
import { OrderItem } from '../entities/orderItem.entity';
import { Product } from '../../product/entities/product.entity';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  totalValue: number;

  @IsNotEmpty()
  @IsEnum(OrderStatusEnum)
  status: OrderStatusEnum;

  @IsNotEmpty()
  @Transform(({ value }) => {
    const user = new User();
    user.id = value;
    return user;
  })
  user: User;

  @IsNotEmpty()
  @Transform(({ value }) => {
    return value.map((item: Partial<OrderItem>) => {
      const product = new Product();
      product.id = item?.product?.id;

      const orderItem = new OrderItem();
      orderItem.product = product;

      orderItem.quantity = item?.quantity || 0;
      orderItem.salePrice = item?.salePrice || 0;
      return orderItem;
    });
  })
  items: OrderItem[];
}
