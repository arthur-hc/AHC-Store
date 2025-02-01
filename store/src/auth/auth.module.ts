import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { UserRepository } from '../user/user.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: configService.get<string>('JWT_EXPIRES_IN'),
          },
        };
      },
      inject: [ConfigService],
      global: true,
    }),
  ],
})
export class AuthModule {}
