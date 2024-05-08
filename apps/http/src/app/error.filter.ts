import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

import { CustomError } from '@boilerplate/libs';

@Catch(HttpException, CustomError, Error)
export class ErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof CustomError) {
      response.status(exception.code || HttpStatus.BAD_REQUEST).json({
        statusCode: exception.custom_code,
        msg: exception.message,
        data: null,
      });
    }
  }
}
