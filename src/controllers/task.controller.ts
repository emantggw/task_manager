import {
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { Task } from "src/core/entities/Task.entity";
import { ITaskService } from "src/core/intefraces/itask.interface";
import { CreateTaskDto } from "src/services/task_moudle/task.dto";

@Injectable()
@Controller({ version: "1", path: "tasks" })
export class TaskController {
  constructor(readonly taskService: ITaskService) {}

  @Get("all")
  async getAllTasks(): Promise<Task[]> {
    return await this.taskService.getAllTasks();
  }

  @Post("create")
  async createTask(@Body() data: CreateTaskDto) {
    return await this.taskService.createTask(data);
  }

  @Delete(":id")
  async deleteTask(@Param("id") id: string) {
    return await this.taskService.deleteTask(id);
  }

  @Patch("update")
  async updateTask(@Body() data) {
    return await this.taskService.updateTask(data);
  }
}
