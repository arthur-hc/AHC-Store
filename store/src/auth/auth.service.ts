import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}
  async authenticate(authenticateData: AuthDto): Promise<any> {
    const { email, password } = authenticateData;
    const result = await this.userRepository.findAll({
      email,
    });

    const userExists = result[0];

    if (!userExists || userExists.password !== password)
      throw new ForbiddenException({
        message: 'User or password incorrect',
      });

    return userExists;
  }
}
