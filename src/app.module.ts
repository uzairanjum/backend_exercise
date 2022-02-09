import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './module/database/database.module';
import { TaskModule } from './module/task/task.module';
import { AuthModule } from './module/auth/auth.module';
import { UserModule } from './module/user/user.module';

@Module({

imports: [DatabaseModule, AuthModule,TaskModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
