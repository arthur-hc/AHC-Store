import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserRepository } from '../user.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private readonly userRepository: UserRepository) {}
  async validate(value: string): Promise<boolean> {
    const emailInUse = await this.userRepository.isEmailRegistered(value);

    const isEmailAllowed = !emailInUse;
    return isEmailAllowed;
  }
}

export const IsUniqueEmail = (validateOptions: ValidationOptions) => {
  return (object: object, propertie: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertie,
      options: validateOptions,
      constraints: [],
      validator: UniqueEmailValidator,
    });
  };
};
