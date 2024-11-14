import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserdDto } from './dto/createUser.dto';

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
}
