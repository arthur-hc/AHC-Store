import { IPayload } from './payload.interface';

export interface IRequest extends Request {
  user: IPayload;
}
