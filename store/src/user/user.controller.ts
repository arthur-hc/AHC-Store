import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserdDto } from './dto/createUser.dto';
import { UpdateUserdDto } from './dto/updateUser.dto';
import { UserService } from './user.service';
import { ListUserDto } from './dto/listUser.dto';
import { UserFilterOptionsDto } from './dto/userFilterOptions.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UUIDDto } from '../common/dto/UUID.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userData: CreateUserdDto): Promise<ListUserDto> {
    return await this.userService.create(userData);
  }

  @Get('/:id')
  @UseInterceptors(CacheInterceptor)
  async findById(@Param() { id }: UUIDDto): Promise<ListUserDto | null> {
    return await this.userService.findById(id);
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  async findAll(
    @Query() filters: UserFilterOptionsDto,
  ): Promise<ListUserDto[]> {
    return await this.userService.findAll(filters);
  }

  @Patch('/:id')
  async update(
    @Param() { id }: UUIDDto,
    @Body() userData: UpdateUserdDto,
  ): Promise<UpdateResult> {
    return await this.userService.update(id, userData);
  }

  @Delete('/:id')
  async delete(@Param() { id }: UUIDDto): Promise<DeleteResult> {
    return await this.userService.delete(id);
  }
}
