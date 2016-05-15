import React from 'react'
import makeRequest from '../../components/util/makerequest'
import getMessage from '../../components/util/getmessage'

import Auth from '../../components/util/auth'
import UserForm from './userform'

const UserFormContainer = React.createClass({
  makeRequest,
  getMessage,
  getInitialState () {
    return {
      isLoggedIn: this.props.isLoggedIn || false,
      submitvalue: this.props.showCreateAccount ? 'Sign Up' : 'Submit',
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
    this.setState(form)
  },
  handleSubmit (e) {
    e.preventDefault()
    let handleSubmit = (this.props.showCreateAccount) ? this.handleCreateUser : this.handleLogin
    handleSubmit(this.state.form)
  },
  handleLogin (user) {
    const self = this
    let options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    this.makeRequest('/api/user/login', options)
    .then((response) => {
      if (response.error) {
        self.setState({ message: response.error })
      } else {
        Auth.setUser({
          _id: response._id,
          email: response.email
        })
        window.location = '/'
      }
    })
    .catch((err) => {
      console.log(err)
    })
  },
  handleCreateUser (user) {
    let options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    this.makeRequest('/api/user', options)
    .then((response) => {
      let self = this
      if (response.error) {
        self.setState({ message: response.error })
      } else {
        self.handleLogin(user)
      }
    })
    .catch((err) => {
      console.log(err)
    })
  },
  render () {
    return (
      <div className='row'>
        <UserForm className='form form-user col-sm-6 col-md-offset-3'
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          loginHeader={this.state.loginHeader}
          form={this.state.form}
          submitvalue={this.state.submitvalue}
          showCreateAccount={this.props.showCreateAccount}
          message={this.state.message}
          />
      </div>
    )
  }
})

export default UserFormContainer
