import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserService } from '@boilerplate/libs';

import { Create, Find } from './dtos';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Generation User',
  })
  @ApiOkResponse({
    status: HttpStatus.CREATED,
    type: Create.Response,
  })
  @Post()
  async create(@Body() body: Create.Body): Promise<Create.Response> {
    return await this.userService.generate(body.email, body.name);
  }

  @ApiOperation({
    summary: 'Find User',
  })
  @ApiOkResponse({
    status: HttpStatus.OK,
    type: Find.Response,
  })
  @Get(':id')
  async find(@Param() param: Find.Param): Promise<Find.Response> {
    return this.userService.find(param.id);
  }
}
