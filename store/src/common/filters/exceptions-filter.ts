import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch(HttpException)
export class ExceptionsFilter implements ExceptionsFilter {
  constructor(private readonly adpterHost: HttpAdapterHost) {}
  catch(exception: HttpException, host: ArgumentsHost) {
    const { httpAdapter } = this.adpterHost;
    const context = host.switchToHttp();
    const response = context.getResponse();
    const status = exception.getStatus();
    const body = exception.getResponse();

    httpAdapter.reply(response, body, status);
  }
}
