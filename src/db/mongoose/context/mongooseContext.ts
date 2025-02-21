import mongoose, { MongooseOptions } from "mongoose"
import User from "../../../models/user"
import * as dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGOSTRING??'', {
    dbName: 'test'
})
const userSchema = new mongoose.Schema<User>({ name: { type: String, required: true } })
let userModel = mongoose.model('users', userSchema)

export { userModel }
