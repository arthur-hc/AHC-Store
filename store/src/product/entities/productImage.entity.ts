import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product_image' })
export class ProductImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'url', length: 100, nullable: false })
  url: string;

  @Column({ name: 'description', length: 100, nullable: false })
  description: string;
}