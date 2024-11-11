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

  async isEmailRegistered(email: string): Promise<boolean> {
    return !!this.users.find((user) => user.email === email);
  }
}
