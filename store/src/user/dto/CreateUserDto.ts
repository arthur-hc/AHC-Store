import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { IsUniqueEmail } from '../validation/uniqueEmailValidator';

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
