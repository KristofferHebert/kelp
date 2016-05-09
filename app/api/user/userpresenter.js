import React from 'react'
import ReactDOMServer from 'react-dom/server'

import UFContainer from './components/userformcontainer'

const UserFormContainer = React.createFactory(UFContainer)

const UserPresenter = {
  login (req, res) {
    res.render('page', {
      content: ReactDOMServer.renderToString(<UserFormContainer isLoggedIn={false} showCreateAccount={false} />),
      mount: 'userform-mount',
      script: 'userform.min.js'
    })
  }
}

export default UserPresenter
