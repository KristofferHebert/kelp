import React from 'react'
import makeRequest from '../components/util/makerequest'

UserFormContainer = React.createClass({
  setInitialState () {
    return {
      isLoggedIn: this.props.isLoggedIn || false,
      loginHeader: this.props.createAccount ? 'Create Account' : 'Login',
      form: {},
      message: false
    }
  },
  handleChange (e) {
    e.preventDefault()
    let form = this.state.form
    form[e.target.name] = e.target.value
    this.setState(form)
  },
  handleSubmit (e) {
    e.preventDefault()
  },
  handleLogin (user) {
    let options = {
      method: 'POST',
      body: user
    }

    this.makeRequest('/api/user/login', options)
    .then((response) => {
      if (response.error) {
        this.setState({message: response.error})
      }
    })
  },
  handleCreateUser (user) {

  },
  makeRequest,
  getMessage () {
    if (!this.state.message) {
      return false
    }

    return (
      <section className='message message-error'>
        {this.props.message}
      </section>
    )
  },
  render () {
    return (
      <div>
        <UserForm className='form form-user'
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          />
        {this.getMessage()}
      </div>
    )
  }
})

export default UserFormContainer
