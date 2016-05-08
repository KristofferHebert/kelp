import React from 'react'

UserFormContainer = React.createClass({
  setInitialState () {
    return {
      isLoggedIn: this.props.isLoggedIn || false,
      loginHeader: this.props.createAccount ? 'Create Account' : 'Login',
      form: {}
    }
  },
  handleChange
})

export default UserFormContainer
