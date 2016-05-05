import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { match, Router, history } from 'react-router'
import ClientRoutes from './clientroutes'

const App = (
  <Router
    history={history}>{ClientRoutes}</Router>
)

const ServerRouter = (url, data, res) => {
  match({ App, location: url }, (error, redirectLocation, renderProps) => {
    console.log(url, data, error, redirectLocation, renderProps)
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      let app = React.renderToString(<RouterContext {...renderProps} />)
      res.status(200).render('index', {
        app: app,
        data: data
      })
    } else {
      res.status(404).send('Not found')
    }
  })
}

export default ServerRouter
