import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UniqueEmailValidator } from './validation/uniqueEmailValidator';

@Module({
  controllers: [UserController],
  imports: [],
  providers: [UserRepository, UserService, UniqueEmailValidator],
})
export class UserModule {}
