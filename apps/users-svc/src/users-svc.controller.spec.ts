import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users-svc.controller';
import { UserSvcService } from './users-svc.service';

describe('UsersSvcController', () => {
  let usersSvcController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UserSvcService],
    }).compile();

    usersSvcController = app.get<UsersController>(UsersController);
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(UsersController.getHello()).toBe('Hello World!');
  //   });
  // });
});
