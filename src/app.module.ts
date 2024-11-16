import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { TaskController } from "./controllers/task.controller";
import { TaskModule } from "./services/task_moudle/task.module";

@Module({
  imports: [TaskModule],
  controllers: [TaskController],
  providers: [],
})
export class AppModule {}
