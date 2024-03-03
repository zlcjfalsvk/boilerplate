import { Injectable } from '@nestjs/common';

import { User } from '@prisma/postgre';

import { wasm } from '../../index';
import { PostgrePrismaService } from '../../configs';

@Injectable()
export class UserService {
  constructor(private readonly postgrePrismaService: PostgrePrismaService) {}

  async generate(email: string, name: string): Promise<User> {
    const user = wasm.User.generate(email, name);

    return {
      id: user.id,
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
