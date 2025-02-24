import LoginDto from "src/models/dtos/loginDto";

export default abstract class IAuthService {
    abstract login(loginDto: LoginDto): Promise<string | null>
}