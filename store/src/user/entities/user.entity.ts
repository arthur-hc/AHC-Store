import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryColumn({ name: 'id', type: 'uuid' })
  id?: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'email', length: 70, nullable: false })
  email: string;

  @Column({ name: 'password', length: 70, nullable: false })
  password: string;

  @CreateDateColumn({ name: 'create_at' })
  createAt?: Date;

  @CreateDateColumn({ name: 'update_at' })
  updateAt?: Date;

  @CreateDateColumn({ name: 'delete_at' })
  deleteAt?: Date;
}
