import { User } from '@prisma/postgre';

export class Param {
  id: string;
}

export class Response implements User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}
