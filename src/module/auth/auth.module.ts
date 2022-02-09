import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './jwt/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

import {AuthService} from './auth.service'

@Module({
    imports: [UserModule, PassportModule,JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '600000s' },
      }),],
    controllers: [AuthController],
    providers: [AuthService,JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}