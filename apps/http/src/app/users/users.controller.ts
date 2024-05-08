import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserService } from '@boilerplate/domain';

import { Find } from './dtos';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

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
