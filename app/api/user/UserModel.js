import db from '../db'

const Schema = db.Schema
const UserSchema = new Schema({
    email: String,
    password: String
})

const UserModel = db.model('user',UserSchema)  

export default UserModel
