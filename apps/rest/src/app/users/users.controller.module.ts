import { Module } from '@nestjs/common';

import { UserModule } from '@boilerplate/services';

import { UsersController } from './users.controller';

@Module({
  imports: [UserModule],
  controllers: [UsersController],
})
export class UsersControllerModule {}
