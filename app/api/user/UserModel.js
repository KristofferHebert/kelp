// Some inspiration from http://www.thebuttonfactory.nl/?p=2496
// Email validation inspired by http://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax

import db from '../db'
import passportLocalMongoose from 'passport-local-mongoose'

const Schema = db.Schema

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: 'Email address is required',
    validate: [isEmail, 'Please provide a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address']
  }
})

function isEmail (str) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)
}

UserSchema.plugin(passportLocalMongoose)

const UserModel = db.model('user', UserSchema)

export default UserModel
