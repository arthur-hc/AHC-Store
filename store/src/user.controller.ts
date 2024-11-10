import { Body, Controller, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('/user')
export class UserController {
  private userRepository = new UserRepository();

  @Post()
  async create(@Body() userData) {
    await this.userRepository.save(userData);
    return { status: 'User created', userData };
  }
}
