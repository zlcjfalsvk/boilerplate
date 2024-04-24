import { Module } from '@nestjs/common';

import { UserModule } from '@boilerplate/domain';

import { UsersController } from './users.controller';

@Module({
  imports: [UserModule],
  controllers: [UsersController],
})
export class UsersControllerModule {}
