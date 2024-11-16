import { User } from '../entities/user.entity';

export class ListUserDto {
  constructor(user: User) {
    const { id, name, email } = user;
    this.id = id;
    this.name = name;
    this.email = email;
  }

  id: string;
  name: string;
  email: string;
}
