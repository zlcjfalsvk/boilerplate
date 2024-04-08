import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

import { PrismaModule } from '@boilerplate/config';
import { PRISMA_POSTGRE_SERVICE_TOKEN } from '@boilerplate/libs';

import { UsersControllerModule } from './users/users.controller.module';

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
    PrismaModule.forPostgreGlobal(PRISMA_POSTGRE_SERVICE_TOKEN),
    UsersControllerModule,
  ],
})
export class AppModule {}
