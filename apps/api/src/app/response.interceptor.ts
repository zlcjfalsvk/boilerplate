import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // const request = context.switchToHttp().getRequest();
    // // 특정 조건에 따라 다른 응답 형식을 반환
    // if (request.url === '/api/special-endpoint') {
    //   // 이 라우트에 대해서는 글로벌 형식을 무시하고 다른 형식으로 응답
    //   return next.handle();
    // }

    return next.handle().pipe(
      map((data) => {
        const response = context.switchToHttp().getResponse();
        const statusCode = response.statusCode;

        return {
          statusCode,
          data: data ?? null,
          msg: '',
        };
      }),
    );
  }
}
