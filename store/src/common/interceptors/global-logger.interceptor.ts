import {
  CallHandler,
  ConsoleLogger,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Response } from 'express';
import { Observable, tap } from 'rxjs';
import { IRequest } from '../../auth/interfaces/request.interface';

@Injectable()
export class GlobalLoggerInterceptor implements NestInterceptor {
  constructor(private readonly logger: ConsoleLogger) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest<IRequest>();
    const response = context.switchToHttp().getResponse<Response>();

    const { url, method, user } = request;
    const { statusCode } = response;

    let userMsg = '';
    if (user) {
      userMsg = `User: ${user.email} - `;
    }

    this.logger.log(`${userMsg}${method} ${url}`);

    const preControllerTime = Date.now();

    return next.handle().pipe(
      tap(() => {
        const afterControllerTime = Date.now();
        const responseTime = afterControllerTime - preControllerTime;
        this.logger.log(
          `Status:${statusCode} - Response time: ${responseTime}ms`,
        );
      }),
    );
  }
}
