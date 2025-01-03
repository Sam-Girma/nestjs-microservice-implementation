import { Module } from '@nestjs/common';
import { TaskSvcController } from './task-svc.controller';
import { TaskSvcService } from './task-svc.service';

@Module({
  imports: [],
  controllers: [TaskSvcController],
  providers: [TaskSvcService],
})
export class TaskSvcModule {}
