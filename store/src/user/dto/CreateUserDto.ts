import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserdDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
