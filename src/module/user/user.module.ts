import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {User, UserSchema} from './schema/user.schema'
import {UserService} from './user.service'

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
