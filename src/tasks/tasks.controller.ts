import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';

//Aqui se define como se manejan las peticiones http

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {

    }

    @Get()
    getAllTasks(){
        return this.tasksService.getAllTasks()
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDTO) {
        return this.tasksService.createTask(newTask.title, newTask.description)
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string){
        this.tasksService.deleteTask(id)
    }

    @Patch()
    updateTask(@Query('id') id: string, @Body() updatedFields: UpdateTaskDTO){
        return this.tasksService.updateTask(id, updatedFields)
    }
}
