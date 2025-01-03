import { Controller, Get } from '@nestjs/common';
import { TaskSvcService } from './task-svc.service';

@Controller()
export class TaskSvcController {
  constructor(private readonly taskSvcService: TaskSvcService) {}

  @Get()
  getHello(): string {
    return this.taskSvcService.getHello();
  }
}
