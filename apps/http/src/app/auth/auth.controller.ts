import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthService } from '@boilerplate/service';

import { AuthSignInBodyDto } from './dtos';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Sign In',
  })
  @Post()
  async signIn(@Body() body: AuthSignInBodyDto) {
    return await this.authService.signIn({
      name: body.name,
      email: body.email,
    });
  }
}
