import { Transform } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, IsString, IsUUID } from 'class-validator';
import { User } from '../../user/entities/user.entity';
import OrderStatusEnum from '../Enum/OrderEnum';

export class OrderFilterOptionsDto {
  @IsOptional()
  @IsUUID()
  @IsString()
  id?: string;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  totalValue?: number;

  @IsOptional()
  @IsString()
  @IsEnum(OrderStatusEnum)
  status?: string;

  @IsOptional()
  @Transform(({ value }) => {
    const user = new User();
    user.id = value;
    return user;
  })
  user: User;
}
