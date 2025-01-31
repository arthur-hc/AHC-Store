import { Body, Controller, Post } from '@nestjs/common';
import { HashPasswordsPipe } from '../common/pipes/HashPasswords.pipe';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  authenticate(
    @Body() authenticateData: AuthDto,
    @Body('password', HashPasswordsPipe) password: string,
  ): Promise<any> {
    authenticateData.password = password;
    return this.authService.authenticate(authenticateData);
  }
}
