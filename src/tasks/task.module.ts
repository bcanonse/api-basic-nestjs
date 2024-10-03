import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TasksController } from './task.controller';
import { TaskService } from './task.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [TaskService, PrismaService],
})
export class TaskModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('tasks');
  }
}
