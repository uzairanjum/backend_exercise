import { Body, Controller, Post, Get, UseGuards, } from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto'
import { LocalAuthGuard } from '../auth/auth.guard';

import { TaskService } from './task.service'

@Controller('')
export class TaskController {
    constructor(private readonly tasksService: TaskService) {}

    @Post('/create-task')
    @UseGuards(LocalAuthGuard)
    async registerUser(@Body() registerDto: CreateTaskDto): Promise<any> {
        return this.tasksService.createTask(registerDto);
    }

    @Get('/list-tasks')
    @UseGuards(LocalAuthGuard)
    async getAllTasks(): Promise<any> {
        return this.tasksService.getAllTasks();
    }


}
