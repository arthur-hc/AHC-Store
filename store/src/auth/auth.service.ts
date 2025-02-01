import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../user/user.repository';
import { AuthDto } from './dto/auth.dto';
import { IAccessToken } from './interfaces/accessToken.interface';
import { IPayload } from './interfaces/payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}
  async authenticate(authenticateData: AuthDto): Promise<IAccessToken> {
    const { email, password } = authenticateData;
    const result = await this.userRepository.findAll({
      email,
      password,
    });

    const userExists = result[0];

    if (!userExists)
      throw new UnauthorizedException({
        message: 'User or password incorrect',
      });

    const { id } = userExists;

    if (!id) throw new UnauthorizedException({ message: 'User not found' });

    const payload: IPayload = { sub: id, email };

    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token,
    };
  }
}
