import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { IsUniqueEmail } from '../decorators/uniqueEmailValidator.decorator';

export class CreateUserdDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @IsUniqueEmail({ message: 'Email already in use' })
  email: string;

  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
