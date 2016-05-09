import React from 'react'
import makeRequest from '../../components/util/makerequest'

import UserForm from './userform'

const UserFormContainer = React.createClass({
  getInitialState () {
    return {
      isLoggedIn: this.props.isLoggedIn || false,
      loginHeader: this.props.showCreateAccount ? 'Create Account' : 'Login',
      form: {
        email: '',
        password: ''
      },
      message: false
    }
  },
  handleChange (e) {
    e.preventDefault()
    let form = this.state.form
    form[e.target.name] = e.target.value
    console.log(form)

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
    let options = {
      method: 'POST',
      body: user
    }

    this.makeRequest('/api/user', options)
    .then((response) => {
      let self = this
      if (response.error) {
        this.setState({message: response.error})
      } else {
        self.handleLogin(user)
      }
    })
  },
  makeRequest,
  getMessage () {
    let message = (
      <section className='message message-error'>
        {this.state.message}
      </section>
    )
    return this.state.message ? message : false
  },
  render () {
    return (
      <div>
        <UserForm className='form form-user'
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          form={this.state.form}
          />
        {this.getMessage()}
      </div>
    )
  }
})

export default UserFormContainer
