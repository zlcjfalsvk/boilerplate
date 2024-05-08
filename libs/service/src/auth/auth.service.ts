import { Injectable } from '@nestjs/common';

import { User } from '@prisma/postgre';
import { UserService } from '@boilerplate/domain';
import { CustomError } from '@boilerplate/libs';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signIn(param: Pick<User, 'name' | 'email'>): Promise<User> {
    if (await this.userService.find(param.email)) {
      throw new CustomError({
        message: 'Already has User',
        custom_code: 'E-AUTH-001',
      });
    }

    return await this.userService.generate(param.email, param.name);
  }
}
