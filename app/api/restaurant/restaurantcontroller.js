import RestaurantModel from './restaurantmodel'

const RestaurantController = {

  // Get Restaurant by ID, returns a promise
  _addReviewStats (restaurant) {
    let average = 0
    if (!restaurant.reviews.length) {
      let sum = restaurant.reviews.reduce((a, b) => {
        return a.stars + b.stars
      })
      average = sum / restaurant.reviews.length
    }

    let reviewStats = {
      numberOf: restaurant.reviews.length,
      average: average
    }
    restaurant.reviewStats = reviewStats

    return restaurant
  },
  get (id, sort) {
    const promise = new Promise((resolve, reject) => {
      if (id) {
        RestaurantModel.findOne({'_id': id})
          .populate('reviews')
          .exec((err, restaurant) => {
            if (err) return reject(err)
            return resolve(restaurant)
          })
      } else {
        let query = sort || null
        RestaurantModel.find({}, null, query)
          .populate('reviews')
          .exec((err, restaurant) => {
            if (err) return reject(err)
            return resolve(restaurant)
          })
      }
    })

    return promise
  },

  // Create Restaurant based on data object, returns a promise
  post (data) {
    const newuser = new RestaurantModel(data)

    const promise = new Promise((resolve, reject) => {
      newuser.save((err, newuser) => {
        if (err) return reject(err)
        return resolve(newuser)
      })
    })

    return promise
  },

  // Update Restaurant based on data object, returns a promise
  update (id, data) {
    const promise = new Promise((resolve, reject) => {
      RestaurantModel.findOne({'_id': id})
        .populate('reviews')
        .exec((err, restaurant) => {
          if (err) return reject(err)
          restaurant.reviews = restaurant.reviews.concat(data.reviews)
          restaurant.save()
          return resolve(restaurant)
        })
    })

    return promise
  },

  // Delete Restaurant based on ID, returns a promise
  delete (id) {
    const promise = new Promise((resolve, reject) => {
      RestaurantModel.findOne({_id: id}).remove((err, removed) => {
        if (err) return reject(err)
        return resolve(removed)
      })
    })
    return promise
  }
}

export default RestaurantController
