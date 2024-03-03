import { Injectable } from '@nestjs/common';

import { User } from '@prisma/postgre';

import { CUSTOM_ERROR_CODE, wasm } from '../../index';
import { PostgrePrismaService } from '../../configs';
import { CustomError } from '../../custom.error';

@Injectable()
export class UserService {
  constructor(private readonly postgrePrismaService: PostgrePrismaService) {}

  async generate(email: string, name: string): Promise<User> {
    const hasUser = await this.postgrePrismaService.user.findUnique({
      where: {
        email: email,
      },
    });
    if (hasUser) {
      throw new CustomError({
        message: 'Already exist User',
        custom_code: CUSTOM_ERROR_CODE.ALREADY_HAS_USER,
      });
    }

    const wasm_user = wasm.User.generate(email, name);
    return this.postgrePrismaService.user.create({
      data: {
        id: wasm_user.id,
        name: wasm_user.name,
        email: wasm_user.email,
        createdAt: new Date(wasm_user.created_at),
      } as User,
    });
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
