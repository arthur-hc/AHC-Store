import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserdDto } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { ListUserDto } from './dto/listUser.dto';
import { UpdateUserdDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async create(
    userData: CreateUserdDto,
  ): Promise<Omit<UserEntity, 'password'>> {
    const newUser = this.userRepository.save(userData);

    return new ListUserDto(newUser.id, newUser.name, newUser.email);
  }

  async findAll(): Promise<ListUserDto[]> {
    return this.userRepository.list().map((user) => {
      return new ListUserDto(user.id, user.name, user.email);
    });
  }

  async updateById(
    id: string,
    userNewData: UpdateUserdDto,
  ): Promise<ListUserDto> {
    const user = this.userRepository.updateById(id, userNewData);

    return new ListUserDto(user.id, user.name, user.email);
  }
}
