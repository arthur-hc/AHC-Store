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
import { CreateUserdDto } from './dto/createUser.dto';
import { UpdateUserdDto } from './dto/updateUser.dto';
import { UserService } from './user.service';
import { ListUserDto } from './dto/listUser.dto';
import { UserFilterOptionsDto } from './dto/userFilterOptions.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userData: CreateUserdDto): Promise<ListUserDto> {
    return await this.userService.create(userData);
  }

  @Get('/:id')
  async findById(@Param('id') id: string): Promise<ListUserDto> {
    return await this.userService.findById(id);
  }

  @Get()
  async findAll(
    @Query() filters: UserFilterOptionsDto,
  ): Promise<ListUserDto[]> {
    return await this.userService.findAll(filters);
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() userData: UpdateUserdDto,
  ): Promise<UpdateResult> {
    return await this.userService.update(id, userData);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<DeleteResult> {
    return await this.userService.delete(id);
  }
}
