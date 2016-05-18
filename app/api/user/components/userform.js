import React from 'react'
import getMessage from '../../components/util/getmessage'

const UserForm = React.createClass({
  getMessage,
  createUserMessage () {
    let UserMessage = (
      <h4 className='text-center' tabIndex='3'>
        <a href='/user/signup'>Don't have a Account? Sign-up!</a>
      </h4>
    )
    return (this.props.showCreateAccount) ? false : UserMessage
  },
  render () {
    return (
      <form onSubmit={this.props.onSubmit} className={this.props.className}>
        <h3 className='text-center'>{this.props.loginHeader}</h3>
          <div className='form-group'>
            <label htmlFor='email'> Email </label>
              <input name='email' type='email' placeholder='Your Email'
                value={this.props.form.email}
                onChange={this.props.onChange}
                className='form-control'
                required={true}
                autoFocus={true}
                tabIndex='1'
                />
          </div>
          <div className='form-group'>
            <label htmlFor='password'> Password </label>
              <input name='password' type='password'
                placeholder='Password'
                value={this.props.form.password}
                onChange={this.props.onChange}
                className='form-control'
                tabIndex='2'
                required />
          </div>
          <div>
            <input type='submit' name='submit' value={this.props.submitvalue} className='btn btn-primary btn-block' tabIndex='3' role='button'/>
          </div>
          <br />
        {this.createUserMessage()}
        {this.getMessage(this.props.message)}
      </form>
    )
  }
})

export default UserForm
