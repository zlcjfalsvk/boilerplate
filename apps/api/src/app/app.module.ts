import { Module } from '@nestjs/common';
import { UserControllerModule } from './user/user.controller.module';

@Module({
  imports: [UserControllerModule],
})
export class AppModule {}
