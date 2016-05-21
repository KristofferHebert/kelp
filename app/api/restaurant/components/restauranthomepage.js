import React from 'react'
import generateStars from '../../review/components/generateStars'

const RestaurantPage = React.createClass({
  getInitialState () {
    return {
      filter: false
    }
  },
  handleSort (e) {
    e.preventDefault()
    let value = e.target.value
    console.log(value)
    if (value === 'newest') {
      window.location = '/'
    } else {
      window.location = window.location + '?sort=' + value
    }
  },
  handleFilter (e) {
    e.preventDefault()
    var newState = this.state
    newState.filter = Number(e.target.value)
    console.log(newState)
    this.setState(newState)
  },
  getAverageReviews (reviews) {
    if (reviews.length === 0) {
      return [{
        stars: 0
      }]
    }
    var result = reviews.reduce((a, b) => {
      return a.stars + b.stars
    })

    var stars = (Math.floor(result / reviews.length) > 1) ? Math.floor(result / reviews.length) : 1

    return [{
      stars: stars
    }]
  },
  hideByFilter (reviews) {
    if (this.state.filter === false) {
      return false
    }
    var stars = this.getAverageReviews(reviews)
    var results = stars[0].stars !== this.state.filter
    console.log(stars[0].stars, this.state.filter, results)
    return results
  },
  getNumberOfReviews (reviewsLength) {
    if (reviewsLength === 1 || reviewsLength === 0) {
      return reviewsLength + ' review'
    } else {
      return reviewsLength + ' reviews'
    }
  },
  render () {
    var RestaurantPageContent = this.props.data.map((restaurant, i) => {
      var reviewsLength = restaurant.reviews.length
      var restaurantStars = 'restaurant-stars restaurant-stars-' + reviewsLength
      var ti = 0
      var self = this
      return (
        <article className='restaurant-container row' key={'abc' + i} hidden={self.hideByFilter(restaurant.reviews)}>
          <div className='col-md-7'>
            <a href={'/r/' + restaurant._id} tabIndex={ti}><img src={restaurant.images} className='image-border' alt={restaurant.name + ' main picture'} title={restaurant.name + ' main picture'}/></a>
          </div>
          <aside className='col-md-4'>
            <h2 className='restaurant-header'><a href={'/r/' + restaurant._id} tabIndex={ti}>{restaurant.name}</a></h2>
          <div className='cb'>{generateStars(self.getAverageReviews(restaurant.reviews))}</div>
            <p className={restaurantStars}>{this.getNumberOfReviews(reviewsLength)}</p>
            <p className='restaurantHours'>{restaurant.hours}</p>
          <address><a href={'https://maps.google.com?q=' + restaurant.address} target='_blank'>{restaurant.address} ( Directions )</a></address>
            <p className='restaurant-description'>{restaurant.description}<a href={'/r/' + restaurant._id} tabIndex={ti}>Learn more</a></p>
          </aside>
        </article>
      )
    })

    return (
        <section>
          <div className='bg-success padding mb bg-info row'>
          <form className='form-inline pull-right' role='form'>
            <label forHtml='sort' className='mr'>Sort by: </label>
          <select name='sort' onChange={this.handleSort} className='form-control mr' defaultValue='default' tabIndex='0'>
              <option value='default'>Select Option</option>
              <option value='newest'>Newest Restaurant</option>
              <option value='name'>Name of Restaurant</option>
            </select>
            <label forHtml='filterbyreview' className='mr'>Filter by Rating: </label>
          <select name='filterbyreview' onChange={this.handleFilter} className='form-control' defaultValue='default' tabIndex='0'>
              <option value='default'>Select Rating</option>
            <option value='5'>Five Star only</option>
              <option value='4'>Four Star only</option>
              <option value='3'>Three Star only</option>
              <option value='2'>Two Star only</option>
              <option value='1'>One Star only</option>
            </select>
          </form>
          </div>
          <ul>
            {RestaurantPageContent}
          </ul>
        </section>
    )
  }
})

export default RestaurantPage
