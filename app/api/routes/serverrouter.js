import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Location } from 'react-router'
import { Router } from 'react-router'
import ClientRoutes from '../clientroutes'

const ServerRouter = (url, cb) => {
  Router.run(ClientRoutes, new Location(url), (err, props) => {
    cb(err, props)
  })
}

export default ServerRouter
