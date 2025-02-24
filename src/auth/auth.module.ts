import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AppModule } from 'src/app.module';
import IAuthService from 'src/services/abstract/iAuthService';
import AuthManager from 'src/services/concrete/authManager';
import IUserDal from 'src/db/abstract/iUserDal';
import MUserDal from 'src/db/mongoose/mUserDal';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/utils/jwt_token/strategies/jwt.strategy';

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
  controllers: [AuthController],
  providers: [
    {
      provide: IUserDal,
      useClass: MUserDal
    },
    {
      provide: IAuthService,
      useClass: AuthManager
    },
    JwtStrategy
  ]
})
export class AuthModule { }
