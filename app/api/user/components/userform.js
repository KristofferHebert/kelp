import React from 'react'

const UserForm = React.createClass({
  render () {
    return (
      <form handleSubmit={this.props.handleSubmit} className={this.props.className}>
        <h3>{this.props.loginHeader}</h3>
        <label htmlFor='email' className='control-label'> Email
          <div className='form-group'>
            <input name='email' type='email' placeholder='Your Email'
              value={this.props.form.email}
              handleChange={this.props.handleChange}
              className='form-control'
              required />
          </div>
        </label>
        <label htmlFor='password'> Password
          <div className='form-group'>
            <input name='password' type='password'
              placeholder='Password'
              value={this.props.form.email}
              handleChange={this.props.handleChange}
              className='form-control'
              required />
          </div>
        </label>
        <input type='submit' name='submit' value='submit' className='btn btn-primary' />
      </form>
    )
  }
})

export default UserForm
