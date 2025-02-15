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
import { CreateUserdDto } from './dto/createUser.dto';
import { UpdateUserdDto } from './dto/updateUser.dto';
import { UserService } from './user.service';
import { ListUserDto } from './dto/listUser.dto';
import { UserFilterOptionsDto } from './dto/userFilterOptions.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UUIDDto } from '../common/dto/uuid.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { HashPasswordsPipe } from '../common/pipes/HashPasswords.pipe';
import { AuthGuard } from '../auth/auth.guard';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(
    @Body() userData: CreateUserdDto,
    @Body('password', HashPasswordsPipe) password: string,
  ): Promise<ListUserDto> {
    userData.password = password;
    return await this.userService.create(userData);
  }

  @Get('/:id')
  @UseGuards(AuthGuard)
  @UseInterceptors(CacheInterceptor)
  async findById(@Param() { id }: UUIDDto): Promise<ListUserDto | null> {
    return await this.userService.findById(id);
  }

  @Get()
  @UseGuards(AuthGuard)
  @UseInterceptors(CacheInterceptor)
  async findAll(
    @Query() filters: UserFilterOptionsDto,
  ): Promise<ListUserDto[]> {
    return await this.userService.findAll(filters);
  }

  @Patch('/:id')
  @UseGuards(AuthGuard)
  async update(
    @Param() { id }: UUIDDto,
    @Body() userData: UpdateUserdDto,
    @Body('password', HashPasswordsPipe) password: string,
  ): Promise<UpdateResult> {
    if (password) userData.password = password;
    return await this.userService.update(id, userData);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard)
  async delete(@Param() { id }: UUIDDto): Promise<DeleteResult> {
    return await this.userService.delete(id);
  }
}
