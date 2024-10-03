import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";

export interface User {
    name: string,
    age: number
}

@Injectable()
export class TaskService {
    createTask(task: CreateTaskDto) {
        console.log(task)
        return 'Create task'
    }

    getAllTasks(): User {
        return {
            name: 'Test',
            age: 40
        }
    }
}