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

    const err = exception.getResponse();

    if (err instanceof CustomError) {
      response.status(err.code || HttpStatus.BAD_REQUEST).json({
        statusCode: err.custom_code,
        msg: err.message,
        data: null,
      });
    }
  }
}
