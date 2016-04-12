import express from 'express'
import UserRouter from './user/userrouter'

const routes = express.Router()
routes.use('user', UserRouter)

export default routes
