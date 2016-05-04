import React from 'react'
import { Router } from 'react-router'
import { history } from 'react-router/lib/browser'
import ClientRoutes from '../components/clientroutes'

React.render((<Router
  history={history}>{ClientRoutes}</Router>),
  document.getElementById('root'))
