import React from 'react'
import ReactDOMServer from 'react-dom/server'

import UserFormContainer from './components/userformcontainer'

let ufc = React.createFactory(UserFormContainer)

const UserPresenter = {
  login (req, res) {
    res.render('page', {
      content: ReactDOMServer.renderToString(<UserFormContainer isLoggedIn={false} loginHeader={false}/>),
      mount: 'userform-mount',
      script: 'userform.js'
    })
  }
}

export default UserPresenter
