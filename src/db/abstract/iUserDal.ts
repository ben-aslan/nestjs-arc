import User from "../../models/user";
import IEntityRepository from "./iEntityRepository";

abstract class IUserDal extends IEntityRepository<User> {

}

export default IUserDal