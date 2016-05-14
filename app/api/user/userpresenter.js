import React from 'react'
import ReactDOMServer from 'react-dom/server'

import UFContainer from './components/userformcontainer'

const UserFormContainer = React.createFactory(UFContainer)

const UserPresenter = {
  login (req, res) {
    let __data = {isLoggedIn: false, showCreateAccount: false}
    res.render('page', {
      content: ReactDOMServer.renderToStaticMarkup(UserFormContainer(__data)),
      mount: 'userform-mount',
      script: 'userform.min.js',
      __data: __data
    })
  },
  signup (req, res) {
    let __data = {isLoggedIn: false, showCreateAccount: true}

    res.render('page', {
      content: ReactDOMServer.renderToStaticMarkup(UserFormContainer(__data)),
      mount: 'userform-mount',
      script: 'userform.min.js',
      __data: __data
    })
  }
}

export default UserPresenter
