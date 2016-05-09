import React from 'react'
import ReactDOMServer from 'react-dom/server'

import UserFormContainer from './components/userformcontainer'

let ufc = React.createFactory(UserFormContainer)

const UserPresenter = {
  login (req, res) {
    res.render('page', {
      content: ReactDOMServer.renderToString(<ufc isLoggedIn={false} loginHeader={false}/>),
      mount: 'userform-mount',
      script: 'userform.min.js'
    })
  }
}

export default UserPresenter
