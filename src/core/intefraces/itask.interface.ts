import { Task } from '../entities/Task.entity';

export abstract class ITaskService {
  abstract getAllTasks(): Promise<Task[]>;
  abstract deleteTask(id: string): Promise<boolean>;
  abstract updateTask(task: Task): Promise<boolean>;
  abstract createTask(task: Task): Promise<Task>;
}
