// some inspiration from https://medium.com/@firasd/quick-start-tutorial-universal-react-with-server-side-rendering-76fe5363d6e#.qhzq428t2
// https://github.com/firasd/react-server-tutorial/blob/master/server.js

import ReactRouter from 'react-router'

const _match = ReactRouter.match

const routes = {}

const ClientRouter = {
  match (location) {
    const promise = new Promise((resolve, reject) => {
      _match({routes: routes, location: location}, (error, redirectLocation, renderProps) => {
        if (error) {
          return reject(error)
        }
        return resolve(redirectLocation, renderProps)
      })
    })
    return promise
  }
}

export default ClientRouter
