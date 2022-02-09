
import {Controller,Post,Body, Get} from '@nestjs/common';
import {AuthService} from '../auth/auth.service'
import {LoginDto} from '../auth/dto/login.dto'


@Controller('')
export class AuthController {
    constructor( private authService: AuthService, ) {}

    @Post('/login')
    async login(@Body() loginDto: LoginDto) {
        const user = await this.authService.login(loginDto);
        return user;
    }

    @Get('/user')
    async getUser(@Body() loginDto: LoginDto) {
        const user = await this.authService.getUser();
        return user;
    }
}
