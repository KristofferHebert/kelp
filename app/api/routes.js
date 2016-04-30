import express from 'express'
import UserRouter from './user/userrouter'
import ReviewRouter from './review/reviewrouter'
import HomeRouter from './home/homerouter'
import RestaurantRouter from './restaurant/restaurantrouter'

const routes = express.Router()
routes.use('/api/user', UserRouter)
routes.use('/api/review', ReviewRouter)
routes.use('/api/restaurant', RestaurantRouter.RestaurantAPIRouter)

// Pages
routes.use('/', HomeRouter)
routes.use('/restaurant', RestaurantRouter.RestaurantClientRouter)

// Global 404 response
routes.get('*', (req, res) => {
  res.status(404).render('404')
})

export default routes
