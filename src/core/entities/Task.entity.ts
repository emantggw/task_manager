import { TaskStatus } from "../enums/task_status.enum";

export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  category: string;
  createdAt: Date;
}
