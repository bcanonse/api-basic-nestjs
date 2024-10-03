import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Request, Response } from 'express';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller({})
export class TasksController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/tasks')
  getAllTasks(@Query() query: any) {
    return this.taskService.getAllTasks();
  }

  @Get('/tasks/:id')
  getAllTaskById(@Param('id') id: string) {
    console.log(id);
    return this.taskService.getAllTasks();
  }

  @Get('/task')
  getTask(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);

    return response.status(200).json({
      message: 'Task',
    });
  }

  @Post('/tasks')
  createTask(@Body() task: CreateTaskDto) {
    return this.taskService.createTask(task);
  }
}
