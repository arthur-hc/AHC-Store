import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../user/user.repository';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}
  async authenticate(authenticateData: AuthDto): Promise<any> {
    const { email, password } = authenticateData;
    const result = await this.userRepository.findAll({
      email,
    });

    const userExists = result[0];

    if (!userExists || userExists.password !== password)
      throw new UnauthorizedException({
        message: 'User or password incorrect',
      });

    const { id } = userExists;

    const payload = { id, email };

    const token = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
      expiresIn: this.configService.get<string>('JWT_EXPIRES_IN'),
    });

    return {
      access_token: token,
    };
  }
}
