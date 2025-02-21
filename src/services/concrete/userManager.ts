import { RootFilterQuery, UpdateQuery, UpdateWithAggregationPipeline } from "mongoose";
// import LogAspect from "../../aspects/logAspect";
import IUserDal from "../../db/abstract/iUserDal";
import User from "../../models/user";
// import useAspect from "../../utils/aspects/aspectAttribute";
import IUserService from "../abstract/iUserService";
import { Injectable } from "@nestjs/common";
// import SecurityAspect from "../../aspects/securityAspect";

@Injectable()
class UserManager implements IUserService {

    constructor(private readonly userDal: IUserDal) {
    }

    // @useAspect([new LogAspect('(userManager.updateUser)'), new SecurityAspect()])
    async updateUser(filter: RootFilterQuery<User>, update: UpdateWithAggregationPipeline | UpdateQuery<User>): Promise<void> {
        await this.userDal.updateOne(filter, update)
    }

    // @useAspect([new LogAspect('(userManager.deleteUser)')])
    async deleteUser(filter?: RootFilterQuery<User> | undefined): Promise<void> {
        await this.userDal.deleteOne(filter)
    }

    // @useAspect([new LogAspect('(userManager.deleteUser)')])
    async addUser(user: User): Promise<void> {
        await this.userDal.add(user)
    }

}

export default UserManager