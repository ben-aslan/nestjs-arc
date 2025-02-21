import { Types } from "mongoose"

interface IEntity {

}

interface User extends IEntity {
    _id: Types.ObjectId | undefined
    name: string
    __v: number
}

export default User