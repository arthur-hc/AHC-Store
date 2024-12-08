import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UniqueEmailValidator } from './decorators/uniqueEmailValidator.decorator';
import { User } from './entities/user.entity';

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserRepository, UserService, UniqueEmailValidator],
})
export class UserModule {}
