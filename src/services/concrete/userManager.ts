import { RootFilterQuery, Types, UpdateQuery, UpdateWithAggregationPipeline, Document } from "mongoose";
import IUserDal from "../../db/abstract/iUserDal";
import User from "../../models/concrete/user";
import IUserService from "../abstract/iUserService";
import { Injectable } from "@nestjs/common";

@Injectable()
class UserManager implements IUserService {

    constructor(private readonly userDal: IUserDal) {
    }

    async getUser(filter?: RootFilterQuery<User> | undefined): Promise<(Document<unknown, {}, User> & User & Required<{ _id: Types.ObjectId; }> & { __v: number; }) | null> {
        return await this.userDal.findOne(filter)
    }

    async updateUser(filter: RootFilterQuery<User>, update: UpdateWithAggregationPipeline | UpdateQuery<User>): Promise<void> {
        await this.userDal.updateOne(filter, update)
    }

    async deleteUser(filter?: RootFilterQuery<User> | undefined): Promise<void> {
        await this.userDal.deleteOne(filter)
    }

    async addUser(user: User): Promise<void> {
        await this.userDal.add(user)
    }

}

export default UserManager