import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from '@boilerplate/service';

import { AuthSignInBodyDto } from './dtos';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async signIn(@Body() body: AuthSignInBodyDto) {
    await this.authService.signIn({ name: body.name, email: body.email });
  }
}
