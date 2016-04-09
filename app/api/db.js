import mongoose from 'mongoose'
import config from '../config'

let db = mongoose

// Set Database based on enviroment
const database = (process.env.ENVIROMENT === 'production') ? config.live_db : config.staging_db

console.log(database)

db.connect('mongodb://localhost/' + database)

export default db
