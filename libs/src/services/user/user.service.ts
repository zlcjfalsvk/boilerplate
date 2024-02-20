import { Injectable } from '@nestjs/common';

import { User } from '@prisma/postgre';

// eslint-disable-next-line @nx/enforce-module-boundaries
import * as wasm from '../../../../wasm';

import { PostgrePrismaService } from '../../configs';

@Injectable()
export class UserService {
  constructor(private readonly postgrePrismaService: PostgrePrismaService) {}

  async generate(email: string, name: string): Promise<User> {
    // Todo uuid
    const user = wasm.User.generate(1, email, name);

    return {
      id: user.id + '',
      name: user.name,
      email: user.email,
      createdAt: new Date(user.created_at),
    } as User;
  }

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
