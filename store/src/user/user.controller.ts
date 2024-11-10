import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserdDto } from './dto/CreateUserDto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userData: CreateUserdDto) {
    await this.userService.create(userData);
    return { status: 'User created', userData };
  }

  @Get()
  async list() {
    return await this.userService.findAll();
  }
}
