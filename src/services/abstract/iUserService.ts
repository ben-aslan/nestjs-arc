import mongoose, { RootFilterQuery, Types, Document } from "mongoose"
import User from "../../models/concrete/user"

abstract class IUserService {
    abstract getUser(filter?: RootFilterQuery<User> | undefined): Promise<(Document<unknown, {}, User> & User & Required<{ _id: Types.ObjectId; }> & { __v: number; }) | null>
    abstract addUser(user: User): Promise<void>
    abstract deleteUser(filter?: RootFilterQuery<User> | undefined): Promise<void>
    abstract updateUser(filter: RootFilterQuery<User>, update: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<User>): Promise<void>
}

export default IUserService