import React from 'react'
import Auth from '../../components/util/auth'
import makeRequest from '../../components/util/makerequest'

import generateStars from './generateStars'
import ReviewForm from './reviewform'

let ReviewsList = React.createClass({
  makeRequest,
  getInitialState () {
    return {
      isLoggedIn: false,
      newReview: {
        title: '',
        owner_id: '',
        owner_name: '',
        restaurant_id: this.props.restaurant_id,
        body: '',
        stars: '1'
      },
      message: false
    }
  },
  submitNewReview (review) {
    let self = this
    let options = {
      method: 'POST',
      body: JSON.stringify(review),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    let endpoint = '/api/restaurant/' + this.state.newReview.restaurant_id

    this.makeRequest(endpoint, options)
    .then((response) => {
      if (response.error) {
        self.setState({ message: response.error })
      } else {
        window.location = window.location
      }
    })
    .catch((err) => {
      console.log(err)
    })
  },
  componentDidMount () {
    const user = Auth.getUser()
    if (user) {
      const newReview = this.state.newReview
      newReview.owner_id = user._id
      newReview.owner_name = user.email

      this.setState({
        isLoggedIn: true,
        newReview: newReview
      })
    }
  },
  handleSubmit (e) {
    e.preventDefault()
    this.submitNewReview({'reviews': [this.state.newReview]})
  },
  handleChange (e) {
    e.preventDefault()
    let updatedState = this.state.newReview
    let name = e.target.name
    updatedState[name] = e.target.value
    this.setState(updatedState)
  },
  generateStars,
  render () {
    let self = this
    let Reviews = this.props.reviews.map(function (review, index) {
      var time = new Date(Date.parse(review.createdAt)).toDateString()
      return (
          <article className='review-container' key={index} tabIndex={index + 5}>
            <div className='row'>
              <div className='col-md-8'>
                <h3 className='review-title'>{review.title}</h3>
                <p>{review.body}</p>
              </div>
              <aside className='col-md-4 reviewstar-container'>
                {self.generateStars([self.props.reviews[index]])}
                <div className='review-owner-name cb'>{'By ' + review.owner_name}<br />on {time}</div>
              </aside>
            </div>
          </article>
         )
    })

    return (
        <section className='mb'>
          {Reviews}
          <ReviewForm
            restaurant_id={this.props.restaurant_id}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            newReview={this.state.newReview}
            isLoggedIn={this.state.isLoggedIn}
            message={this.state.message} />
        </section>
     )
  }
})

export default ReviewsList
