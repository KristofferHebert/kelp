import express from 'express'
import Router from 'react-router'
import UserRouter from '../user/userrouter'
import ReviewRouter from '../review/reviewrouter'
import RestaurantRouter from '../restaurant/restaurantrouter'

const routes = express.Router()
// API endpoints
routes.use('/api/user', UserRouter.UserAPIRouter)
routes.use('/api/review', ReviewRouter)
routes.use('/api/restaurant', RestaurantRouter.RestaurantAPIRouter)

// Pages
routes.use('/', RestaurantRouter.RestaurantClientRouter)
routes.use('/user', UserRouter.UserClientRouter)

export default routes
