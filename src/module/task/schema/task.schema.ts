import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type TaskDocument = Task & Document;

@Schema()
export class Task extends Document {

    @Prop({ required: true, unique: true })
    name: string;

}

export const TaskSchema = SchemaFactory.createForClass(Task);
