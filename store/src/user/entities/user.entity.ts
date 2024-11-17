import { Product } from 'src/product/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'email', length: 70, nullable: false })
  email: string;

  @Column({ name: 'password', length: 70, nullable: false })
  password: string;

  @CreateDateColumn({ name: 'create_at' })
  createAt?: Date;

  @UpdateDateColumn({ name: 'update_at' })
  updateAt?: Date;

  @DeleteDateColumn({ name: 'delete_at' })
  deleteAt?: Date;

  @OneToMany(() => Product, (product) => product.user, {
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  products?: Product[];
}
