import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly user: UserRepository) {}
  async create(userData) {
    return await this.user.save(userData);
  }

  async findAll() {
    return await this.user.list();
  }
}
