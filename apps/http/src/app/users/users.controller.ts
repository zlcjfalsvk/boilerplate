import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserService } from '@boilerplate/domain';
import { UsersFindParamDto, UsersFindResponseDto } from './dtos';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Find User',
  })
  @ApiOkResponse({
    status: HttpStatus.OK,
    type: UsersFindResponseDto,
  })
  @Get(':id')
  async find(@Param() param: UsersFindParamDto): Promise<UsersFindResponseDto> {
    return this.userService.find(param.id);
  }
}
