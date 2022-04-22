import { Injectable, NestInterceptor, ExecutionContext, CallHandler, BadGatewayException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => {
          // função que vai ser executada depois
          console.log(`After... ${Date.now() - now}ms`)
        }),
        // catchError(err => throwError(() => {
        //   console.log(`After... ${Date.now() - now}ms`);
        //   new BadGatewayException();
        // })),
      );
  }
}
