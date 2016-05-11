import React from 'react'

const ReviewForm = React.createClass({
  getInitialState () {
    return {
      title: '',
      owner_id: '',
      restaurant_id: '',
      body: '',
      stars: ''
    }
  },
  handleSubmit (e) {
    e.preventDefault()
  },
  handleChange (e) {
    let updatedState = this.state[e.target.name]
    updatedState = e.target.value
    this.setState(updatedState)
  },
  render () {
    return (
      <form className=''>
        <fieldset className='form-inline'>
          <label htmlFor='title' hidden>Title:</label>
            <input name='title' type='text' value={this.state.title} placeholder='Title' onChange={this.handleChange} className='form-control' required/>
          <label htmlFor='stars'>Rating:</label>
          <select class='form-control' name='stars' selected='1' value={this.state.stars} placeholder='Stars' onChange={this.handleChange} className='form-control'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </fieldset>
        <fieldset className='form-group'>
          <label htmlFor='message' hidden>Message</label>
            <textarea name='Message' placeholder='Message' onChange={this.handleChange} className='form-control' rows='3'required>
              {this.state.body}
            </textarea>
        </fieldset>
        <input name='submit' type='submit' className='btn btn-primary btn-block' />
      </form>
      ) }
})

export default ReviewForm
