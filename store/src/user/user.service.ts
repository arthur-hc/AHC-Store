import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserdDto } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { ListUserDto } from './dto/listUser.dto';

@Injectable()
export class UserService {
  constructor(private readonly user: UserRepository) {}
  async create(
    userData: CreateUserdDto,
  ): Promise<Omit<UserEntity, 'password'>> {
    const newUser = this.user.save(userData);

    return new ListUserDto(newUser.id, newUser.name, newUser.email);
  }

  async findAll() {
    return this.user.list().map((user) => {
      return new ListUserDto(user.id, user.name, user.email);
    });
  }
}
