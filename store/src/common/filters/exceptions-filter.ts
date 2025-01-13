import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class ExceptionsFilter implements ExceptionsFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const status = exception.getStatus();
    const body = exception.getResponse();

    return response.status(status).json(body);
  }
}
