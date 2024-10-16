import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController], //Aqui se define como se manejan las peticiones http
  providers: [TasksService] //Aqui se define como recuperan y manipulan los datos de la base datos.
})
export class TasksModule {}
