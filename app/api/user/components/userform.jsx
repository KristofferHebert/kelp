import React from 'react'

const UserForm = React.createClass({
  render () {
    return (
      <form handleSubmit={this.props.handleSubmit} className={this.props.className}>
        <label for='email'> Email
        <input name='email' type='email' placeholder='Your Email'
          value={this.props.form.email}
          handleChange={this.props.handleChange} />
        </label>
        <label for='password'> Password
        <input name='password' type='password'
          placeholder='Password'
          value={this.props.form.email}
          handleChange={this.props.handleChange} />
        </label>
        <input type='submit' name='submit' value='submit' />
      </form>
    )
  }
})

export default UserForm
