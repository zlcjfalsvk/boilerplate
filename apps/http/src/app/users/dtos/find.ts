import { User } from '@prisma/postgre';
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class UsersFindParamDto {
  @ApiProperty({
    name: 'User Id',
  })
  @IsUUID()
  id: string;
}

export class UsersFindResponseDto implements User {
  @ApiProperty()
  id: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  createdAt: Date;
}
