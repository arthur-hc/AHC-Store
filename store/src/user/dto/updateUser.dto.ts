import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { IsUniqueEmail } from '../validation/uniqueEmailValidator';

export class UpdateUserdDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsEmail()
  @IsOptional()
  @IsUniqueEmail({ message: 'Email already in use' })
  email: string;

  @MinLength(6)
  @IsOptional()
  password: string;
}
