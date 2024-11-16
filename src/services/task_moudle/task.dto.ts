import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Task } from "src/core/entities/Task.entity";
import { TaskStatus } from "src/core/enums/task_status.enum";
import { v4 } from "uuid";

export class CreateTaskDto extends Task {
  id = v4();

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  status: any;
}
