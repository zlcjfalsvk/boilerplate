import { Module } from '@nestjs/common';

import { UserModule } from '@boilerplate/libs';

import { UserController } from './user.controller';

@Module({
  imports: [UserModule],
  controllers: [UserController],
})
export class UserControllerModule {}
