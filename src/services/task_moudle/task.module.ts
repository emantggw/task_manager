import { Module } from '@nestjs/common';
import { TaskService } from './task_service.service';
import { ITaskService } from 'src/core/intefraces/itask.interface';

@Module({
  imports: [],
  providers: [{ provide: ITaskService, useClass: TaskService }],
  exports: [ITaskService],
})
export class TaskModule {}
