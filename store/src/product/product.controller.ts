import { CacheInterceptor } from '@nestjs/cache-manager';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UUIDDto } from '../common/dto/uuid.dto';
import { CreateProductDto } from './dto/createProduct.dto';
import { ListProductDto } from './dto/listProduct.dto';
import { ProductFilterOptionsDto } from './dto/productFilterOptions.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { ProductService } from './product.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() productData: CreateProductDto): Promise<ListProductDto> {
    return await this.productService.create(productData);
  }

  @Get('/:id')
  @UseGuards(AuthGuard)
  @UseInterceptors(CacheInterceptor)
  async findOne(@Param() { id }: UUIDDto): Promise<ListProductDto | null> {
    return await this.productService.findById(id);
  }

  @Get()
  @UseGuards(AuthGuard)
  @UseInterceptors(CacheInterceptor)
  async findAll(
    @Query() filters: ProductFilterOptionsDto,
  ): Promise<ListProductDto[]> {
    return await this.productService.findAll(filters);
  }

  @Patch('/:id')
  @UseGuards(AuthGuard)
  async update(
    @Param() { id }: UUIDDto,
    @Body() productData: UpdateProductDto,
  ): Promise<UpdateResult> {
    return await this.productService.update(id, productData);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard)
  async delete(@Param() { id }: UUIDDto): Promise<DeleteResult> {
    return await this.productService.delete(id);
  }
}
