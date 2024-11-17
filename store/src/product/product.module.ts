import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductFeature } from './entities/productFeature.entity';
import { ProductImage } from './entities/productImage.entity';

@Module({
  controllers: [ProductController],
  imports: [TypeOrmModule.forFeature([Product, ProductFeature, ProductImage])],
  providers: [ProductService, ProductRepository],
})
export class ProductModule {}
