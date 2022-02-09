
import {Injectable,InternalServerErrorException, Logger, UnauthorizedException } from '@nestjs/common';
import {UserService} from '../user/user.service'
import {LoginDto} from '../auth/dto/login.dto'
import { IJwtPayload } from './jwt/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
//private readonly jwtService: JwtTokenService,

@Injectable()
export class AuthService {
    private logger = new Logger(AuthService.name);
    constructor(  private userService: UserService,  private jwtService: JwtService) {}


    async login(loginCredentialsDto: LoginDto): Promise<any> {
        try {
            const user =  await this.validateUser(loginCredentialsDto.email);
            if (!user) {
                throw new UnauthorizedException('Incorrect email and/or password.');
            }
            const payload: IJwtPayload = { id: user.id, email: user.email };
            const access_token =  this.jwtService.sign(payload)
            this.logger.debug(`Generated JWT Token for User ${user.email}`);
            return {token : access_token};
       

        } catch (e) {
            this.logger.error(`Error updating last login date of user. Details: ${e}`);
            throw new InternalServerErrorException(e);
        }

    
    }

    async validateUser(email: string): Promise<any>{
        const user =  await this.userService.findByEmail(email)
        if(user){
            return user
        }
        return null;

    }

     async getUser():Promise<any>{

     }



}
