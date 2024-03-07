import { DynamicModule, Module, Provider } from '@nestjs/common';

import { PrismaPostgreService } from './prisma.postgre.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({})
export class PrismaModule {
  static forPostgreGlobal(token: string): DynamicModule {
    const provider: Provider = {
      provide: token,
      useFactory: (configService: ConfigService) =>
        new PrismaPostgreService(
          <string>configService.get('POSTGRE_DATABASE_URL'),
        ),
      inject: [ConfigService],
    };
    return {
      global: true,
      imports: [ConfigModule],
      module: PrismaModule,
      providers: [provider],
      exports: [provider],
    };
  }
}
