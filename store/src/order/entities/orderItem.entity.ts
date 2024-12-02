import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { Order } from './order.entity';

@Entity({ name: 'orderItems' })
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ name: 'quantity', nullable: false })
  quantity: number;

  @Column({
    name: 'sale_price',
    nullable: false,
  })
  salePrice: number;

  @ManyToOne(() => Order, (order) => order.items, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    nullable: false,
    createForeignKeyConstraints: true,
  })
  @JoinColumn({ name: 'order_id' })
  order?: Order;

  @ManyToOne(() => Product, (product) => product.orderItem, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    nullable: false,
    createForeignKeyConstraints: true,
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
