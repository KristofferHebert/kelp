import express from 'express'
import Router from 'react-router'
import UserRouter from '../user/userrouter'
import ReviewRouter from '../review/reviewrouter'
import HomeRouter from '../home/homerouter'
import RestaurantRouter from '../restaurant/restaurantrouter'
import ServerRouter from './serverrouter'

const routes = express.Router()
routes.use('/api/user', UserRouter)
routes.use('/api/review', ReviewRouter)
routes.use('/api/restaurant', RestaurantRouter.RestaurantAPIRouter)

// Pages
routes.use('/', HomeRouter)
routes.use('/restaurant', RestaurantRouter.RestaurantClientRouter)

routes.use('*', (req, res) => {
  ServerRouter(req.url, (err, props) => {
    if (err) {
      res.status(404).send({err})
    }

    res.render('page', {
      app: ReactDOMServer.renderToString(<Router props={props} />),
      __initialstate: '{}'
    })
  })
})

export default routes
