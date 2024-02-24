import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '@prisma/postgre';

import { UserService } from '@boilerplate/libs';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body): Promise<any> {
    return await this.userService.generate(body.email, body.name);
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<User> {
    return this.userService.find(id);
  }
}
