import React from 'react'

const RestaurantPage = React.createClass({
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
  getAverageReviews (reviews) {
    if (reviews.length === 0) {
      return 0
    }
    var result = reviews.reduce((a, b) => {
      return a.stars + b.stars
    })
    return result
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
      var ti = i + 2

      return (
        <article className='restaurant-container row' key={'abc' + i}>
          <div className='col-md-7' tabIndex={ti}>
            <a href={'/r/' + restaurant._id}><img src={restaurant.images} className='image-border' alt={restaurant.name + ' main picture'} title={restaurant.name + ' main picture'}/></a>
          </div>
          <aside className='col-md-4'>
            <h2 className='restaurant-header'><a href={'/r/' + restaurant._id}>{restaurant.name}</a></h2>
          <span className={restaurantStars}>{this.getNumberOfReviews(reviewsLength)}</span>
            <p className='restaurantHours'>{restaurant.hours}</p>
          <address><a href={'https://maps.google.com?q=' + restaurant.address} target='_blank'>{restaurant.address} ( Directions )</a></address>
            <p className='restaurant-description'>{restaurant.description}<a href={'/r/' + restaurant._id}>Learn more</a></p>
          </aside>
        </article>
      )
    })

    return (
        <section>
          <div className='bg-success padding mb bg-info row'>
          <form className='form-inline pull-right' role='form'>
            <label forHtml='sort' className='mr'>Sort By: </label>
            <select name='sort' onChange={this.handleSort} className='form-control' defaultValue='default' tabIndex='1'>
              <option value='default'>Select Option</option>
              <option value='newest'>Newest Restaurant</option>
              <option value='name'>Name of Restaurant</option>
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
