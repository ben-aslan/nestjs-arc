import mongoose, { RootFilterQuery } from "mongoose"
import User from "../../models/user"

abstract class IUserService {
    abstract addUser(user: User): Promise<void>
    abstract deleteUser(filter?: RootFilterQuery<User> | undefined): Promise<void>
    abstract updateUser(filter: RootFilterQuery<User>, update: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<User>): Promise<void>
}

export default IUserService