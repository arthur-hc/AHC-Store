export class UserRepository {
  private readonly users = [];

  async save(user) {
    this.users.push(user);
  }
}
