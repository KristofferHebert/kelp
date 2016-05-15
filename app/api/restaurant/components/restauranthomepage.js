import React from 'react'

const RestaurantPage = React.createClass({
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
      return (
        <article className='restaurant-container row' key={'' + i}>
          <div className='col-md-7'>
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
          <h2>Restaurants</h2>
          <ul>
            {RestaurantPageContent}
          </ul>
        </section>
    )
  }
})

export default RestaurantPage
