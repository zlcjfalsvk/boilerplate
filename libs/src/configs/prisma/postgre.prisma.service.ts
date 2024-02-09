import { Injectable, OnModuleInit } from '@nestjs/common';

import { PrismaClient } from '@prisma/postgre';

@Injectable()
export class PostgrePrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
