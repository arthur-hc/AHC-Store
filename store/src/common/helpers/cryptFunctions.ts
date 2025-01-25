import { createCipheriv, scrypt } from 'crypto';
import { promisify } from 'util';

export async function encryptContent(
  content: string,
  passKey: string,
  ivKey: string,
) {
  const iv = Buffer.from(ivKey, 'hex');
  const key = (await promisify(scrypt)(passKey, 'salt', 32)) as Buffer;

  const cipher = createCipheriv('aes-256-ctr', key, iv);
  const encryptedPassword = Buffer.concat([
    cipher.update(content),
    cipher.final(),
  ]);

  const hash = encryptedPassword.toString('hex');

  return hash;
}

export async function decryptContent(
  hash: string,
  passKey: string,
  ivKey: string,
) {
  const iv = Buffer.from(ivKey, 'hex');
  const key = (await promisify(scrypt)(passKey, 'salt', 32)) as Buffer;

  const decipher = createCipheriv('aes-256-ctr', key, iv);
  const decryptedContent = Buffer.concat([
    decipher.update(Buffer.from(hash, 'hex')),
    decipher.final(),
  ]);

  return decryptedContent.toString();
}
