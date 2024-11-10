import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() productData) {
    return this.productService.create(productData);
  }

  @Get()
  list() {
    return this.productService.findAll();
  }
}
