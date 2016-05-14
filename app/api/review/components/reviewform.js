import React from 'react'
import Auth from '../../components/util/auth.js'

const ReviewForm = React.createClass({
  getInitialState () {
    return {
      newReview: {
        title: '',
        owner_id: '',
        restaurant_id: this.props.restaurant_id,
        body: '',
        stars: ''
      }
    }
  },
  getCurrentUser () {
    return Auth.getCurrentUser()
  },
  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state.newReview)
  },
  handleChange (e) {
    let updatedState = this.state.newReview[e.target.name]
    updatedState = e.target.value
    console.log(updatedState)
    this.setState(updatedState)
  },
  render () {
    return (
      <section id='restaurantform-mount'>
        <form onSubmit={this.handleSubmit}>
          <h4>Add Review</h4>
          <fieldset className='form-inline'>
            <label htmlFor='title' hidden>Title:</label>
            <input name='title' type='text' value={this.state.newReview.title} placeholder='Title' onChange={this.handleChange} className='form-control' required/>
            <label htmlFor='stars' className='ml'>Rating:</label>
            <select className='form-control' name='stars' selected='1' value={this.state.newReview.stars} placeholder='Stars' onChange={this.handleChange} className='form-control'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </fieldset>
          <fieldset className='form-group'>
            <label htmlFor='message' hidden>Message</label>
            <textarea name='Message' placeholder='Message' onChange={this.handleChange} className='form-control' rows='3' value={this.state.newReview.body} required />
          </fieldset>
          <input name='submit' type='submit' className='btn btn-primary btn-block' />
        </form>
      </section>
    )
  }
})

export default ReviewForm
