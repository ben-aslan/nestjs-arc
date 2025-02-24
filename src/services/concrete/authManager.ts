import LoginDto from "src/models/dtos/loginDto";
import IAuthService from "../abstract/iAuthService";
import IUserDal from "src/db/abstract/iUserDal";
import { JwtService } from "@nestjs/jwt";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export default class AuthManager implements IAuthService {
    constructor(private userDal: IUserDal, private jwt: JwtService) {

    }

    async login(loginDto: LoginDto): Promise<string | null> {
        let user = await this.userDal.findOne({ name: loginDto.username })
        if (user)
            return this.jwt.sign({ name: user.name, role: 'admin' })
        else
            throw new UnauthorizedException();
    }
}