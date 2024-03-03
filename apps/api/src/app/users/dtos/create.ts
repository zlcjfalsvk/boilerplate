import { User } from '@prisma/postgre';

import { ApiProperty } from '@nestjs/swagger';

import { ApiSchema } from '../../../api-schema.decorator';
import { IsEmail, IsString, MaxLength } from 'class-validator';

@ApiSchema({ name: 'UsersCreateBodyDto' })
export class Body {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  name: string;
}

@ApiSchema({ name: 'UsersCreateResponseDto' })
export class Response implements User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdAt: Date;
}
