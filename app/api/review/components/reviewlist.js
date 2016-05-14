import React from 'react'
import Auth from '../../components/util/auth'
import makeRequest from '../../components/util/makerequest'
import ReviewForm from './reviewform'

let ReviewsList = React.createClass({
  makeRequest,
  getInitialState () {
    return {
      isLoggedIn: false,
      newReview: {
        title: '',
        owner_id: '',
        restaurant_id: this.props.restaurant_id,
        body: '',
        stars: ''
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

    this.makeRequest('/api/user/login', options)
    .then((response) => {
      if (response.error) {
        self.setState({ message: response.error })
      } else {
        console.log(response)
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

      this.setState({
        isLoggedIn: true,
        newReview: newReview
      })
    }
  },
  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state.newReview)
  },
  handleChange (e) {
    e.preventDefault()
    let updatedState = this.state.newReview
    let name = e.target.name
    updatedState[name] = e.target.value
    this.setState(updatedState)
  },
  render () {
    let rv = this.props.reviews
    let Reviews = rv.map(function (review, index) {
      let stars = []
      let max = 5 - review.stars
      let i = -1
      let ii = -1
      while (++i < review.stars) {
        stars.push((<span className='review-star' key={'b' + i}></span>))
      }

      while (++ii < max) {
        stars.push((<span className='review-star review-star-gray' key={'a' + ii}></span>))
      }

      var time = new Date(Date.parse(review.createdAt)).toDateString()

      return (
          <article className='review-container' key={index}>
            <div className='row'>
              <div className='col-md-8'>
                <h3 className='review-title'>{review.title}</h3>
                <p>{review.body}</p>
              </div>
              <aside className='col-md-4 reviewstar-container'>
                {stars}
                <span className='review-owner-name'>{'By ' + review.owner_name}<br />on {time}</span>
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
