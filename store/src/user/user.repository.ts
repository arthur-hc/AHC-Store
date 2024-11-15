import { Injectable } from '@nestjs/common';
import { CreateUserdDto } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { UpdateUserdDto } from './dto/updateUser.dto';

@Injectable()
export class UserRepository {
  private readonly users: UserEntity[] = [];

  save(user: CreateUserdDto): UserEntity {
    const newId = uuid();

    const userEntity = new UserEntity(
      user.name,
      user.email,
      user.password,
      newId,
    );
    this.users.push(userEntity);

    return userEntity;
  }

  list(): UserEntity[] {
    return this.users;
  }

  isEmailRegistered(email: string): boolean {
    return !!this.users.find((user) => user.email === email);
  }

  updateById(id: string, userNewData: UpdateUserdDto): UserEntity | undefined {
    const userFound = this.users.find((user) => user.id === id);

    if (!userFound) {
      throw new Error('User not found');
    }

    Object.assign(userFound, userNewData);
    return userFound;
  }

  deleteById(id: string): void {
    const userFoundIndex = this.users.findIndex((user) => user.id === id);

    if (userFoundIndex === -1) {
      throw new Error('User not found');
    }

    this.users.splice(userFoundIndex, 1);
  }
}
