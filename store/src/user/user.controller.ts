import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('/user')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post()
  async create(@Body() userData) {
    await this.userRepository.save(userData);
    return { status: 'User created', userData };
  }

  @Get()
  async list() {
    return await this.userRepository.list();
  }
}
