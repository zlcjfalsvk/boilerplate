import { Injectable } from '@nestjs/common';

import { User } from '@prisma/postgre';

import { PostgrePrismaService } from '../../configs';

@Injectable()
export class UserService {
  constructor(private readonly postgrePrismaService: PostgrePrismaService) {}

  async find(id: string): Promise<User | undefined> {
    const item = await this.postgrePrismaService.user.findUnique({
      where: { id },
    });

    if (item === null) {
      return undefined;
    }

    return item;
  }
}
