import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private readonly users = [];

  async save(user) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }
}
