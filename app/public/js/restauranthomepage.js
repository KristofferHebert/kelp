'use strict'

import __RestaurantHomepage__ from '../../api/restaurant/components/restauranthomepage'

// global __data
const RestaurantHomepage = React.createFactory(__RestaurantHomepage__)
ReactDOM.render(RestaurantHomepage(__data),
document.getElementById('restaurant-mount'))
