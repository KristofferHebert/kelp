import express from 'express'
import UserRouter from './user/userrouter'
import ReviewRouter from './review/reviewrouter'

const routes = express.Router()
routes.use('/user', UserRouter)
routes.use('/review', ReviewRouter)

// Global 404 response
routes.get('*', (req, res) => {
  res.send('<h1>404 - Missing Page</h1>', 404)
})

export default routes
