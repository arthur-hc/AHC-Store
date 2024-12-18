import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserdDto } from './dto/createUser.dto';
import { ListUserDto } from './dto/listUser.dto';
import { UpdateUserdDto } from './dto/updateUser.dto';
import { UserFilterOptionsDto } from './dto/userFilterOptions.dto';
import { UserRepository } from './user.repository';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(userData: CreateUserdDto): Promise<ListUserDto> {
    const user = await this.userRepository.save(userData);
    return new ListUserDto(user);
  }

  async findById(id: string): Promise<ListUserDto | null> {
    const user = await this.userRepository.findById(id);
    if (!user)
      throw new NotFoundException({
        message: 'User not found',
      });
    return new ListUserDto(user);
  }

  async findAll(filters: UserFilterOptionsDto): Promise<ListUserDto[]> {
    const users = await this.userRepository.findAll(filters);
    return users.map((user) => new ListUserDto(user));
  }

  async update(id: string, userData: UpdateUserdDto): Promise<UpdateResult> {
    return await this.userRepository.update(id, userData);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
}
