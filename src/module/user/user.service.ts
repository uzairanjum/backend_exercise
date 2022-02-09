
import { Model } from 'mongoose';
import {Logger, ConflictException, InternalServerErrorException,Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import {RegisterDto} from './dto/register.dto'


@Injectable()
export class UserService {
    private logger = new Logger(UserService.name);
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}


    async register(registerDto: RegisterDto): Promise<any> {
        try {
            const user = new this.userModel({ ...registerDto})
            await user.save();
            return user;
        } catch (e) {
            // duplicate email error code
            if (e.code === 11000) {
                throw new ConflictException('This email address has already been used.');
            } else {
                this.logger.error('Error creating user. Details:', e);
                throw new InternalServerErrorException(e);
            }
        }
   

       
          
        }

    async findByEmail(email: string): Promise<any> {
            return this.userModel.findOne({email: email });
        }  
    }






