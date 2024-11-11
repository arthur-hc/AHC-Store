import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() productData: CreateProductDto) {
    return this.productService.create(productData);
  }

  @Get()
  list() {
    return this.productService.findAll();
  }
}
