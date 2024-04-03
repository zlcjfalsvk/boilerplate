import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import * as process from 'process';

// nx 에서 jest preset 을 설정하는데 nx lib 가 아닌 폴더 에서 Client 를 가져와 path 사용 시 jest 에서 읽어올 수 없음
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Prisma, PrismaClient } from '@prisma/postgre';

@Injectable()
export class PrismaPostgreService
  extends PrismaClient<
    Prisma.PrismaClientOptions,
    'info' | 'warn' | 'query' | 'error'
  >
  implements OnModuleInit, OnModuleDestroy
{
  constructor(host: string) {
    const isDevEnv = process.env['ENABLE_PRISMA_LOG'] || false;
    super({
      datasources: {
        db: {
          url: host,
        },
      },
      log: isDevEnv
        ? [
            {
              level: 'query',
              emit: 'event',
            },
            { level: 'info', emit: 'stdout' },
            { level: 'warn', emit: 'stdout' },
            { level: 'error', emit: 'stdout' },
          ]
        : [],
    });
    if (isDevEnv) {
      this.$on('query', (e) => {
        // console.log(e);
        let queryWithParams = e.query;
        const params = JSON.parse(e.params);
        params.forEach((param: any, index: number) => {
          queryWithParams = queryWithParams.replace(
            `$${index + 1}`,
            `'${param}'`,
          );
        });

        console.info(`${e.timestamp}`);
        console.info(`Query: ${queryWithParams}`);
      });
    }
  }
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
