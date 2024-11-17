import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductFeature } from './productFeature.entity';
import { ProductImage } from './productImage.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @ManyToOne(() => User, (user) => user.products, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'price', nullable: false })
  price: number;

  @Column({ name: 'quantity', nullable: false })
  quantity: number;

  @Column({ name: 'description', length: 100, nullable: false })
  description: string;

  @OneToMany(() => ProductFeature, (feature) => feature.product, {
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    eager: true,
  })
  features: ProductFeature[];

  @OneToMany(() => ProductImage, (image) => image.product, {
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    eager: true,
  })
  images: ProductImage[];

  @Column({ name: 'category', length: 100, nullable: false })
  category: string;

  @CreateDateColumn({ name: 'create_at' })
  createAt?: Date;

  @UpdateDateColumn({ name: 'update_at' })
  updateAt?: Date;

  @DeleteDateColumn({ name: 'delete_at' })
  deleteAt?: Date;
}
