import { Injectable } from '@nestjs/common';
import { CreateUserdDto } from './dto/createUser.dto';
import { ListUserDto } from './dto/listUser.dto';
import { UpdateUserdDto } from './dto/updateUser.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async create(userData: CreateUserdDto): Promise<ListUserDto> {
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

  async deleteById(id: string): Promise<void> {
    this.userRepository.deleteById(id);
  }
}
