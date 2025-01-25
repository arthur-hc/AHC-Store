import { InternalServerErrorException, PipeTransform } from '@nestjs/common';
import { encryptContent } from '../helpers/cryptFunctions';

export class HashPasswordsPipe implements PipeTransform {
  async transform(passwordToEncrypt: any) {
    if (!passwordToEncrypt) return;

    const ivKey = process.env.IV_KEY;
    const passKey = process.env.PASS_KEY;

    if (!ivKey || !passKey) {
      console.error('IV_KEY or PASS_KEY not found');
      throw new InternalServerErrorException();
    }

    const hash = await encryptContent(passwordToEncrypt, passKey, ivKey);

    return hash;
  }
}
