import React from 'react'

const ReviewForm = React.createClass({
  setInitialState () {
    return {
      trim: true,
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
      <form {...this.props}>
        <label for='title'>
          <input name='title' type='text' value={this.state.title} placeholder='Title' onChange={this.handleChange} required/>
        </label>
        <label for='title'>
          <input name='stars' type='number' value={this.state.stars} placeholder='Stars' onChange={this.handleChange} min='1' max='5' required/>
        </label>
        <label for='body'>
          <textarea name='body' placeholder='Body' onChange={this.handleChange} required>
            {this.state.body}
          </textarea>
        </label>
        <input name='submit' type='submit' />
      </form>
      ) }
})

export default ReviewForm
