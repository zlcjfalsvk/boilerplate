import { Controller, Get, Param } from '@nestjs/common';
import { User } from '@prisma/postgre';

import { UserService } from '@boilerplate/libs';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  async find(@Param('id') id: string): Promise<User> {
    return this.userService.find(id);
  }
}
