import { NestFactory } from '@nestjs/core';
import { TaskSvcModule } from './task-svc.module';

async function bootstrap() {
  const app = await NestFactory.create(TaskSvcModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
