import {
  Injectable,
  InternalServerErrorException,
  PipeTransform,
} from '@nestjs/common';
import { encryptContent } from '../helpers/cryptFunctions';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HashPasswordsPipe implements PipeTransform {
  constructor(private readonly configService: ConfigService) {}

  async transform(passwordToEncrypt: any) {
    if (!passwordToEncrypt) return;

    const ivKey = this.configService.get<string>('IV_KEY');
    const passKey = this.configService.get<string>('PASS_KEY');

    if (!ivKey || !passKey) {
      console.error('IV_KEY or PASS_KEY not found');
      throw new InternalServerErrorException();
    }

    const hash = await encryptContent(passwordToEncrypt, passKey, ivKey);

    return hash;
  }
}
