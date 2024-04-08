import { Test, TestingModule } from '@nestjs/testing';

import { PrismaPostgreService } from '@boilerplate/configs';
import { PRISMA_POSTGRE_SERVICE_TOKEN } from '@boilerplate/libs';

import { UserService } from './user.service';

const host = process.env['POSTGRE_DATABASE_URL'] || '';
describe('UserService', () => {
  let service: UserService;
  let prismaPostgreService: PrismaPostgreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PRISMA_POSTGRE_SERVICE_TOKEN,
          useFactory: () => new PrismaPostgreService(host),
        },
        UserService,
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    prismaPostgreService = module.get<PrismaPostgreService>(
      PRISMA_POSTGRE_SERVICE_TOKEN,
    );
  });

  it('find - id 기반 user 조회', async () => {
    const userId = 'a19276fc-b8a2-4d7a-9fe4-d8d1966872ef';

    jest.spyOn(prismaPostgreService.user, 'findUnique').mockResolvedValueOnce({
      id: 'a19276fc-b8a2-4d7a-9fe4-d8d1966872ef',
      email: 'zl0759vk@naver.com',
      name: 'cheolcheol',
      createdAt: new Date(),
    });
    const user = await service.find(userId);
    expect(user).not.toBeUndefined();
  });
});
