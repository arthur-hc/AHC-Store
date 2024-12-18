import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from './entities/user.entity';
import { UserFilterOptionsDto } from './dto/userFilterOptions.dto';

@Injectable()
export class UserRepository {
  private readonly repository: Repository<User>;

  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(User);
  }

  async findById(id: string): Promise<User | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findAll(where?: UserFilterOptionsDto): Promise<User[]> {
    return this.repository.find({ where });
  }

  async save(userData: User): Promise<User> {
    return this.repository.save(userData);
  }

  async update(id: string, productData: Partial<User>): Promise<UpdateResult> {
    return this.repository.update(id, productData);
  }

  async delete(id: string): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
