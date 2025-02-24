import LoginDto from "src/models/dtos/loginDto";
import IAuthService from "../abstract/iAuthService";
import IUserDal from "src/db/abstract/iUserDal";
import { JwtService } from "@nestjs/jwt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import PassportUser from "src/models/dtos/passportUser";

@Injectable()
export default class AuthManager implements IAuthService {
    constructor(private userDal: IUserDal, private jwt: JwtService) {

    }

    async login(loginDto: LoginDto): Promise<string | null> {
        let user = await this.userDal.findOne({ name: loginDto.username })
        if (user)
            return this.jwt.sign({ username: user.name, claims: ['admin'] } as PassportUser)
        else
            throw new UnauthorizedException();
    }
}