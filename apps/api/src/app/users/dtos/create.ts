import { User } from '@prisma/postgre';

import { ApiProperty } from '@nestjs/swagger';

import { ApiSchema } from '../../../api-schema.decorator';

@ApiSchema({ name: 'UsersCreateBodyDto' })
export class Body {
  @ApiProperty()
  email: string;

  @ApiProperty()
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
