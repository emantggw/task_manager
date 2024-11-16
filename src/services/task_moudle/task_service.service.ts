import { Task } from "src/core/entities/Task.entity";
import { ITaskService } from "src/core/intefraces/itask.interface";
import { v4 } from "uuid";

export class TaskService implements ITaskService {
  private _tasks: Task[] = [];
  //TODO: change to persistance

  async getAllTasks(): Promise<Task[]> {
    return this._tasks;
  }
  async deleteTask(id: string): Promise<boolean> {
    this._tasks = this._tasks.filter((task) => task.id != id);
    return true;
  }
  async updateTask(task: Task): Promise<boolean> {
    const filteredTasks = this._tasks.filter((task) => task.id != task.id);
    this._tasks = [...filteredTasks, task];
    return true;
  }
  async createTask(task: Task): Promise<Task> {
    task.id = v4();
    task.createdAt = new Date();
    this._tasks = [...this._tasks, task];
    return task;
  }
}
