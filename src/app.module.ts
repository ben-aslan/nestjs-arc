import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import UserManager from './services/concrete/userManager';
import MUserDal from './db/mongoose/mUserDal';
import IUserDal from './db/abstract/iUserDal';
import IUserService from './services/abstract/iUserService';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: IUserDal,
      useClass: MUserDal
    },
    {
      provide: IUserService,
      useClass: UserManager
    }]
})

export class AppModule { }
