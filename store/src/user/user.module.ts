import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';

@Module({
  controllers: [UserController],
  imports: [],
  providers: [UserRepository],
})
export class UserModule {}
