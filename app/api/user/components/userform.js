import React from 'react'

const UserForm = React.createClass({
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
                autoFocus={true}/>
          </div>
          <div className='form-group'>
            <label htmlFor='password'> Password </label>
              <input name='password' type='password'
                placeholder='Password'
                value={this.props.form.password}
                onChange={this.props.onChange}
                className='form-control'
                required />
          </div>
          <div>
            <input type='submit' name='submit' value={this.props.submitvalue} className='btn btn-primary btn-block' />
          </div>
          <br />
          <h4 className='text-center'><a href='/user/signup'>Don't have a Account? Sign-up!</a></h4>
      </form>
    )
  }
})

export default UserForm
