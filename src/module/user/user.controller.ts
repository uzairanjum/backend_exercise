import { Body, Controller, Post,UseGuards, Get} from '@nestjs/common';
import {UserService} from './user.service'
import {RegisterDto} from './dto/register.dto'
import { LocalAuthGuard } from '../auth/auth.guard';
import { GetUser} from './get-user-decorator'
import { User} from './schema/user.schema'

@Controller('')
export class UserController {


    constructor(private readonly usersService: UserService) {}

    @Post('/register')
    async registerUser(@Body() registerDto: RegisterDto): Promise<any> {
        return this.usersService.register(registerDto);
    }

     @Get('/user')
    @UseGuards(LocalAuthGuard)
    getUserProfile(@GetUser() user: User) {
        return user;
    }
}
