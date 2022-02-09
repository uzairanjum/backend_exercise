
import { Logger, InternalServerErrorException, Injectable, HttpStatus, HttpException }  from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schema/task.schema';
import {CreateTaskDto} from './dto/create-task.dto'

@Injectable()
export class TaskService {
    private logger = new Logger('TaskService');
    constructor(@InjectModel('Task') private taskModel: Model<TaskDocument>) {}

    async createTask(taskDto:CreateTaskDto): Promise<any>{
        try {
            const task = new this.taskModel({ ...taskDto})
            await task.save();
            return task;
        } catch (e) {    
                this.logger.error('Error creating task. Details:', e);
                throw new InternalServerErrorException(e);
            
        }

    }

    async getAllTasks(): Promise<any> {
        try {
            const allTasks = await this.taskModel.find()
            return allTasks;
        } catch (e) {    
                this.logger.error('Error getiing task list. Details:', e);
                throw new InternalServerErrorException(e);
            
        }

       
    }
}
