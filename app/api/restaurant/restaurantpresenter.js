import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Restaurant from './index'
import RestaurantPage from './components/restauranthomepage'

import ReviewList from '../review/components/reviewlist'

const Rl = React.createFactory(ReviewList)
const rp = React.createFactory(RestaurantPage)

const RestaurantPresenter = {
  home (req, res) {
    Restaurant.Controller.get()
      .then((results) => {
        const __data = { data: results }
        const restaurant = ReactDOMServer.renderToStaticMarkup(rp(__data))
        return res.render('page', {
          content: restaurant,
          __data: __data,
          mount: 'restaurant-mount',
          script: 'restauranthomepage.min.js'
        })
      })
      .catch((err) => {
        console.log(err)
        res.send(err)
      })
  },
  single (req, res) {
    let id = req.params['id']
    Restaurant.Controller.get(id)
      .then((result) => {
        const __data = {reviews: result.reviews, restaurant_id: id}
        const reviews = ReactDOMServer.renderToStaticMarkup(Rl(__data))
        return res.render('restaurant', {
          content: result,
          __data: __data,
          reviews: reviews,
          mount: 'reviews-mount',
          script: 'reviewlist.min.js'
        })
      })
      .catch((err) => {
        console.log(err)
        res.send(err)
      })
  }
}

export default RestaurantPresenter
