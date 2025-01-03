import { Test, TestingModule } from '@nestjs/testing';
import { TaskSvcController } from './task-svc.controller';
import { TaskSvcService } from './task-svc.service';

describe('TaskSvcController', () => {
  let taskSvcController: TaskSvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TaskSvcController],
      providers: [TaskSvcService],
    }).compile();

    taskSvcController = app.get<TaskSvcController>(TaskSvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(taskSvcController.getHello()).toBe('Hello World!');
    });
  });
});
