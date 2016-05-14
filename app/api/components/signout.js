import React from 'react'
import Auth from './util/auth'

const SignOut = React.createClass({

  _signOut (e) {
    e.preventDefault()
    Auth.logoutUser()
    window.location = window.location
  },
  renderSignOutLink () {
    return (
      <a href='#' onClick={this._signOut}>
        Sign out
      </a>
    )
  },

  renderSignInLink () {
    return (
      <a href='/user/login'>
        Sign in or Create Account
      </a>
    )
  },

  renderLink () {
    return (Auth.isLoggedIn()) ? this.renderSignOutLink() : this.renderSignInLink()
  },
  render () {
    let signout = this.renderLink()
    return signout
  }
})

export default SignOut
