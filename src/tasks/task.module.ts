import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TasksController } from './task.controller';
import { TaskService } from './task.service';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [TaskService],
})
export class TaskModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('tasks');
  }
}
