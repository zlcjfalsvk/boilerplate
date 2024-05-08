import { Module } from '@nestjs/common';

import { AuthModule } from '@boilerplate/service';

import { AuthController } from './auth.controller';

@Module({
  imports: [AuthModule],
  controllers: [AuthController],
})
export class AuthControllerModule {}
