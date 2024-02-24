import { Module } from '@nestjs/common';

import { PrismaModule } from '@boilerplate/libs';

import { UsersControllerModule } from './users/users.controller.module';

@Module({
  imports: [PrismaModule.forPostgre(), UsersControllerModule],
})
export class AppModule {}
