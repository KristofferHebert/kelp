import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Restaurant from './index'
import RestaurantPage from './components/restauranthomepage'

import ReviewList from '../review/components/reviewlist'

let Rl = React.createFactory(ReviewList)
const rp = React.createFactory(RestaurantPage)

const RestaurantPresenter = {
  home (req, res) {
    Restaurant.Controller.get()
      .then((results) => {
        return res.render('restauranthomepage', {
          content: results
        })
      })
      .catch((err) => {
        res.send(err)
      })
  },
  single (req, res) {
    let id = req.params['id']
    Restaurant.Controller.get(id)
      .then((result) => {

        const __data = {reviews: result.reviews, restaurant_id: id}

        return res.render('restaurant', {
          content: result,
          __data: __data,
          reviews: ReactDOMServer.renderToStaticMarkup(Rl(__data)),
          mount: 'reviews-mount',
          script: 'reviewform.min.js'
        })
      })
      .catch((err) => {
        res.send(err)
      })
  }
}

export default RestaurantPresenter
