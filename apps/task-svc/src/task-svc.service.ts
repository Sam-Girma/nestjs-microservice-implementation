import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskSvcService {
  getHello(): string {
    return 'Hello World!';
  }
}
