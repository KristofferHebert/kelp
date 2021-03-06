import React from 'react'
import getMessage from '../../components/util/getmessage'

const ReviewForm = React.createClass({
  getMessage,
  renderForm () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <h4>Add Review</h4>
        <fieldset className='form-inline'>
          <label htmlFor='title' hidden>Title:</label>
        <input name='title' id='title' type='text' value={this.props.newReview.title} placeholder='Title' onChange={this.props.handleChange} className='form-control' tabIndex='20' required/>
          <label htmlFor='stars' className='ml'>Rating:</label>
        <select className='form-control' id='stars' name='stars' selected='1' value={this.props.newReview.stars} placeholder='Stars' onChange={this.props.handleChange} className='form-control' tabIndex='21'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </fieldset>
        <fieldset className='form-group'>
          <label htmlFor='body' hidden>Message</label>
        <textarea id='body' name='body' placeholder='Message' onChange={this.props.handleChange} className='form-control' rows='3' value={this.props.newReview.body} tabIndex='22'required />
        </fieldset>
        <input name='submit' type='submit' className='btn btn-primary btn-block' role='button' tabIndex='23'/>
      </form>
    )
  },
  renderCreateOrLogin () {
    return (
      <section className='padding bg-info text-center' tabIndex='40'>
        <p>Please <a href='/user/login' className='btn btn-primary' role='button'>Login</a> or <a href='/user/signup' className='btn btn-primary' tabIndex='23'>Create Account</a></p>
      </section>
    )
  },
  showForm () {
    return (this.props.isLoggedIn) ? this.renderForm() : this.renderCreateOrLogin()
  },
  render () {
    return (
      <section id='restaurantform-mount' className='mt'>
        {this.showForm()}
        {this.getMessage(this.props.message)}
      </section>
    )
  }
})

export default ReviewForm
