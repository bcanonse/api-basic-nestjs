import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Request, Response } from 'express';
import { CreateTaskDto } from './dto/create-task.dto';
import { ValidateTaskPipe } from './pipes/validatetask/validatetask.pipe';
import { TaskGuard } from './guards/task/task.guard';

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

  @Get('tasks/ticket/:num')
  getTaskTicket(@Param('num', ParseIntPipe) num: number) {
    return num + 14;
  }

  @Get('pipe')
  @UseGuards(TaskGuard)
  getTicket(@Query(ValidateTaskPipe) query: { name: string; age: number }) {
    console.log(typeof query.age);
    return `Hello ${query.name}, you are ${query.age} years old`;
  }
}
