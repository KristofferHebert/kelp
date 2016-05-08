import React from 'react'

const UserForm = React.createClass({
  render () {
    return (
      <form handleSubmit={this.props.handleSubmit} className={this.props.className}>
        <input name='email' type='email' placeholder='Your Email'
          value={this.props.form.email}
          handleChange={this.props.handleChange} />

        <input name='password' type='password'
          placeholder='Password'
          value={this.props.form.email}
          handleChange={this.props.handleChange} />
        <input type='submit' name='submit' value='submit' />
      </form>
    )
  }
})

export default UserForm
