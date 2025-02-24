import User from "../../models/concrete/user";
import IEntityRepository from "./iEntityRepository";

abstract class IUserDal extends IEntityRepository<User> {

}

export default IUserDal