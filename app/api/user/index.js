import db from '../db'
import UserController from './usercontroller'
import UserModel from './usermodel'


const User = {
    Model: UserModel,
    Controller: UserController
}

export default User
