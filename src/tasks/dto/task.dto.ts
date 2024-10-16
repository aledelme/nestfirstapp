import { TaskStatus } from "../task.entity"
import { IsEnum, IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'

export class CreateTaskDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string

    @IsString()
    description: string
}

export class UpdateTaskDTO {
    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus
}