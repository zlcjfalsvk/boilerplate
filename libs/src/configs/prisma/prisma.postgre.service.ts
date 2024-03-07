import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

import { PrismaClient } from '@prisma/postgre';

@Injectable()
export class PrismaPostgreService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(host: string) {
    super({
      datasources: {
        db: {
          url: host,
        },
      },
    });
  }
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
