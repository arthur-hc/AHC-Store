import {
  ArgumentsHost,
  Catch,
  ConsoleLogger,
  HttpException,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch(HttpException)
export class ExceptionsFilter implements ExceptionsFilter {
  constructor(
    private readonly adpterHost: HttpAdapterHost,
    private readonly logger: ConsoleLogger,
  ) {}
  catch(exception: HttpException, host: ArgumentsHost) {
    const { httpAdapter } = this.adpterHost;
    const context = host.switchToHttp();
    const response = context.getResponse();
    const status = exception.getStatus();
    const body = exception.getResponse();

    this.logger.error(exception);

    httpAdapter.reply(response, body, status);
  }
}
