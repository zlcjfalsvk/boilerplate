import { DynamicModule, Module, Provider } from '@nestjs/common';

import { ConfigModule, ConfigService } from '@nestjs/config';

import { PrismaPostgreService } from './prisma.postgre.service';

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
