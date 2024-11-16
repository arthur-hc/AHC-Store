import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
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
}
