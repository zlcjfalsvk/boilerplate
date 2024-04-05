import { User } from '@prisma/postgre';
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

import { ApiSchema } from '../../../api-schema.decorator';

@ApiSchema({ name: 'UsersFindBodyDto' })
export class Param {
  @ApiProperty({
    name: 'User Id',
  })
  @IsUUID()
  id: string;
}

@ApiSchema({ name: 'UsersFindResponseDto' })
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
