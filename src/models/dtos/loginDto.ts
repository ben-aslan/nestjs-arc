import IDto from "../abstract/iDto";

export default interface LoginDto extends IDto {
    username: string,
    password: string
}