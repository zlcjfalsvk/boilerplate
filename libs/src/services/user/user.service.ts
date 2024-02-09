import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}

  async find(id: string): Promise<any> {
    return {
      id: id,
      name: 'cheolcheol',
    };
  }
}
