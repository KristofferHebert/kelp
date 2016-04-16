// Some inspiration from http://www.thebuttonfactory.nl/?p=2496

import db from '../db'
import passportLocalMongoose from 'passport-local-mongoose'

const Schema = db.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

UserSchema.plugin(passportLocalMongoose)

const UserModel = db.model('user', UserSchema)

export default UserModel
