import { User } from '@prisma/postgre';

export class Body {
  email: string;
  name: string;
}

export class Response implements User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}
