import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Restaurant from './index'
import RestaurantPage from './components/restauranthomepage'

const rp = React.createFactory(RestaurantPage)

const RestaurantPresenter = {
  home (req, res) {
    Restaurant.Controller.get()
      .then((results) => {
        let app = ReactDOMServer.renderToString(<rp data={results} />)
        return res.render('page', {
          app: app,
          __initialstate: '{}'
        })
      })
      .catch((err) => {
        res.send(err)
      })
  }
}

export default RestaurantPresenter
