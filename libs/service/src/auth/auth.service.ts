import { Injectable } from '@nestjs/common';

import { User } from '@prisma/postgre';
import { UserService } from '@boilerplate/domain';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signIn(param: Pick<User, 'name' | 'email'>): Promise<User> {
    // additional business logic
    return await this.userService.generate(param.email, param.name);
  }
}
