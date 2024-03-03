import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from '@boilerplate/libs';

import { UsersControllerModule } from './users/users.controller.module';
import Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        PORT: Joi.number().port().default(3000),
        USE_DOC: Joi.boolean().default(true),
        POSTGRE_DATABASE_URL: Joi.string()
          .custom((value, helpers) => {
            if (!value) {
              return helpers.error('postgresql is necessary');
            }
            const reg = /^(postgresql)/;
            if (!reg.test(value)) {
              return helpers.error('postgresql Host 형식이 맞지 않음');
            }
            return value;
          })
          .required(),
      }),
    }),
    PrismaModule.forPostgre(),
    UsersControllerModule,
  ],
})
export class AppModule {}
