import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from '@boilerplate/libs';

import { UsersControllerModule } from './users/users.controller.module';

@Module({
  imports: [ConfigModule, PrismaModule.forPostgre(), UsersControllerModule],
})
export class AppModule {}
