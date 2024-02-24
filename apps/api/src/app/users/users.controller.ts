import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { UserService } from '@boilerplate/libs';

import { Create, Find } from './dtos';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: Create.Body): Promise<Create.Response> {
    return await this.userService.generate(body.email, body.name);
  }

  @Get(':id')
  async find(@Param() param: Find.Param): Promise<Find.Response> {
    return this.userService.find(param.id);
  }
}
