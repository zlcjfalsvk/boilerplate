import { DynamicModule, Module } from '@nestjs/common';

import { PostgrePrismaService } from './postgre.prisma.service';

@Module({})
export class PrismaModule {
  static forPostgre(): DynamicModule {
    return {
      global: true,
      module: PrismaModule,
      providers: [PostgrePrismaService],
      exports: [PostgrePrismaService],
    };
  }
}
