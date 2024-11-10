import { Injectable } from '@nestjs/common';
import { CreateUserdDto } from './dto/CreateUserDto';

@Injectable()
export class UserRepository {
  private readonly users = [];

  async save(user: CreateUserdDto) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }
}
