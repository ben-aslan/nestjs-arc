import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import UserManager from './services/concrete/userManager';
import MUserDal from './db/mongoose/mUserDal';
import IUserDal from './db/abstract/iUserDal';
import IUserService from './services/abstract/iUserService';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    AuthModule,
    JwtModule.register({
      secret: 'abc123',
      signOptions: {
        expiresIn: '1h'
      }
    })
  ],
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
