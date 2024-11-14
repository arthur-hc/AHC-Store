import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserdDto } from './dto/createUser.dto';
import { UpdateUserdDto } from './dto/updateUser.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userData: CreateUserdDto) {
    return await this.userService.create(userData);
  }

  @Get()
  async list() {
    return await this.userService.findAll();
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() userNewData: UpdateUserdDto) {
    return await this.userService.updateById(id, userNewData);
  }
}
