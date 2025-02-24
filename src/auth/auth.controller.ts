import { Body, Controller, Get, Post, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import ValidationAspect from 'src/aspects/validationAspect';
import LoginDto from 'src/models/dtos/loginDto';
import IAuthService from 'src/services/abstract/iAuthService';
import { JwtAuthGuard } from 'src/utils/jwt_token/guards/jwt.guard';
import loginValidator from 'src/validationRules/loginValidator';

@Controller('auth')
export class AuthController {
    constructor(private authService: IAuthService) { }

    @Post('login')
    // @UseInterceptors(new ValidationAspect(loginValidator))
    async Login(@Body() loginDto: LoginDto) {
        return await this.authService.login(loginDto)
    }

    @Get('status')
    @UseGuards(new JwtAuthGuard(['admin']))
    async status(@Req() req) {
        return { success: true, token: req.user }
    }
}
