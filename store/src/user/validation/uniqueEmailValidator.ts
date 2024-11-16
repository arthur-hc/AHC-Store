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
  async validate(email: string): Promise<boolean> {
    const emailInUse = await this.userRepository.findAll({ email });

    const isEmailAllowed = emailInUse.length === 0;
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
