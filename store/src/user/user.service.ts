import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserdDto } from './dto/CreateUserDto';

@Injectable()
export class UserService {
  constructor(private readonly user: UserRepository) {}
  async create(userData: CreateUserdDto) {
    return await this.user.save(userData);
  }

  async findAll() {
    return await this.user.list();
  }
}
