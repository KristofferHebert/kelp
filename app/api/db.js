import mongoose from 'mongoose'
import config from '../config'

// Set Database based on enviroment
const database = (config.env === 'production') ? config.live_db : config.staging_db

let db = mongoose.createConnection('mongodb://localhost/' + database)

db.Schema = mongoose.Schema

export default db
