import { Injectable } from '@nestjs/common';
import { CreateUserdDto } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';

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
}
