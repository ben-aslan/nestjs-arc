import mongoose, { Mongoose } from "mongoose";
import User from "../../models/concrete/user";
import MEntityRepository from "./mEntityRepository";
import { userModel } from "./context/mongooseContext";
import IUserDal from "../abstract/iUserDal";
import { Injectable } from "@nestjs/common";

@Injectable()
class MUserDal extends MEntityRepository<User> implements IUserDal {
    constructor() {
        super(userModel)
    }
}

export default MUserDal