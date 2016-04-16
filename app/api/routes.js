import express from 'express'
import UserRouter from './user/userrouter'
import ReviewRouter from './review/reviewrouter'

const routes = express.Router()
routes.use('/user', UserRouter)
routes.use('/review', ReviewRouter)

export default routes
