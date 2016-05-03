import React from 'react'
import Page from '../../components/page'

const RestaurantPage = React.createClass({
  render () {
    var RestaurantPageContent = this.props.data.map((restaurant, i) => {
      var restaurantStars = 'restaurant-stars restaurant-stars-' + restaurant.hours
      return (
        <li key={i}>
          <h4 className='restaurant-header'>{restaurant.name}</h4>
          <span className={restaurantStars}>{restaurant.stars}</span>
          <address>{restaurant.address}</address>
          <p className='restaurant-description'>{restaurant.description}</p>
        </li>
      )
    })

    return (
        <Page>
          <h2>Restaurant</h2>
          <ul>
            {RestaurantPageContent}
          </ul>
        </Page>
    )
  }
})

export default RestaurantPage
