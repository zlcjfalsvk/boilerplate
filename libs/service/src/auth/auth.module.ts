import { Module } from '@nestjs/common';

import { UserModule } from '@boilerplate/domain';

import { AuthService } from './auth.service';

@Module({
  imports: [UserModule],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
