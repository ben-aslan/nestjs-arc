import { Types } from "mongoose"
import IEntity from "../abstract/iEntity"

interface User extends IEntity {
    _id: Types.ObjectId | undefined
    name: string
    password: string
    __v: number
}

export default User