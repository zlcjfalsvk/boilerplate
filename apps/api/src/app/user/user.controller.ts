import { Controller, Get } from '@nestjs/common';

import { UserService } from '@boilerplate/libs';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  async find(): Promise<unknown> {
    return this.userService.find('asdfasdf');
  }
}
