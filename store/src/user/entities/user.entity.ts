export class UserEntity {
  constructor(name: string, email: string, password: string, id?: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  id?: string;
  name: string;
  email: string;
  password: string;
}
