import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/createProduct.dto';
import { Product } from './entities/product.entity';
import { productFilterOptionsDto } from './dto/productFilterOptions.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() productData: CreateProductDto): Promise<Product> {
    return await this.productService.create(productData);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return await this.productService.findById(id);
  }

  @Get()
  async findAll(@Query() filters: productFilterOptionsDto): Promise<Product[]> {
    return await this.productService.findAll(filters);
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() productData: UpdateProductDto,
  ): Promise<UpdateResult> {
    return await this.productService.update(id, productData);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<DeleteResult> {
    return await this.productService.delete(id);
  }
}
