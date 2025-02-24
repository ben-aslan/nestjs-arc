import IDto from "../abstract/iDto";

export default interface PassportUser extends IDto {
    name: string
    username: string
    claims: string[]
}