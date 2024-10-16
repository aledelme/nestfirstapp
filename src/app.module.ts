import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule], //Funcionalidades extras
  controllers: [], //Para poner todas las rutas (GET, POST, etc)
  providers: [], //Funciones para comunicar con la BBDD
})
export class AppModule {}
