import express from 'express'
import UserRouter from './user/userrouter'
import ReviewRouter from './review/reviewrouter'
import HomeRouter from './home/homerouter'

const routes = express.Router()
routes.use('/api/user', UserRouter)
routes.use('/api/review', ReviewRouter)

// Home
routes.use('/', HomeRouter)

// Global 404 response
routes.get('*', (req, res) => {
  res.status(404).render('404')
})

export default routes
