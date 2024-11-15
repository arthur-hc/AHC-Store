import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserdDto } from './dto/createUser.dto';
import { UpdateUserdDto } from './dto/updateUser.dto';
import { UserService } from './user.service';
import { ListUserDto } from './dto/listUser.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userData: CreateUserdDto): Promise<ListUserDto> {
    return await this.userService.create(userData);
  }

  @Get()
  async list(): Promise<ListUserDto[]> {
    return await this.userService.findAll();
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() userNewData: UpdateUserdDto,
  ): Promise<ListUserDto> {
    return await this.userService.updateById(id, userNewData);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.userService.deleteById(id);
  }
}
