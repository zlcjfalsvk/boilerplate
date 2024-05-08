import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength } from 'class-validator';

export class AuthSignInBodyDto {
  @ApiProperty()
  @IsString()
  @MaxLength(20)
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;
}
