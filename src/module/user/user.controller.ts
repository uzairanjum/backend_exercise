import { Body, Controller, Post,} from '@nestjs/common';
import {UserService} from './user.service'
import {RegisterDto} from './dto/register.dto'

@Controller('')
export class UserController {


    constructor(private readonly usersService: UserService) {}

    @Post('/register')
    async registerUser(@Body() registerDto: RegisterDto): Promise<any> {
        return this.usersService.register(registerDto);
    }
}
