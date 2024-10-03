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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller({})
export class TasksController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/tasks')
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'Return all tasks' })
  getAllTasks(@Query() query: any) {
    return this.taskService.getAllTasks();
  }

  @Get('/tasks/:id')
  @ApiOperation({ summary: 'Get task by id' })
  @ApiResponse({ status: 200, description: 'Return task' })
  @ApiResponse({ status: 404, description: 'Task not found' })
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
  @ApiOperation({ summary: 'Create task' })
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
