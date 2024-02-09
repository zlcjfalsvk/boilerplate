import { Module } from '@nestjs/common';

import { PrismaModule } from '@boilerplate/libs';

import { UserControllerModule } from './user/user.controller.module';

@Module({
  imports: [PrismaModule.forPostgre(), UserControllerModule],
})
export class AppModule {}
