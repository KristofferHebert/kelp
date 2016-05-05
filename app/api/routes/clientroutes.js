// some inspiration from https://medium.com/@firasd/quick-start-tutorial-universal-react-with-server-side-rendering-76fe5363d6e#.qhzq428t2
// https://github.com/firasd/react-server-tutorial/blob/master/server.js
// https://www.youtube.com/watch?v=gshWucOdUIw

import React from 'react'
import ReactRouter from 'react-router'
import { Route } from 'react-router'

import RestaurantPage from '../restaurant/components/restauranthomepage.js'

const App = React.createClass({
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

const ClientRoutes = (
  <Route path='/'>
    <Route path='restaurant' component={RestaurantPage} />
  </Route>
)

export default ClientRoutes
