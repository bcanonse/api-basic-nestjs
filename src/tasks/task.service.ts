import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { PrismaService } from 'src/prisma.service';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}
  createTask(task: CreateTaskDto) {
    return this.prismaService.task.create({ data: task });
  }

  getAllTasks() {
    return this.prismaService.task.findMany();
  }
}
