import ReviewModel from './reviewmodel'

const ReviewController = {

    // Get Review by ID, returns a promise
  get (id) {
    const promise = new Promise((resolve, reject) => {
      if (id) {
        ReviewModel.findOne({_id: id}, (err, review) => {
          if (err) return reject(err)
          return resolve(review)
        })
      } else {
        ReviewModel.find({}, (err, review) => {
          if (err) return reject(err)
          return resolve(review)
        })
      }
    })

    return promise
  },

    // Create Revoew based on data object, returns a promise
  post (data) {
    const newuser = new ReviewModel(data)

    const promise = new Promise((resolve, reject) => {
      newuser.save((err, newuser) => {
        if (err) return reject(err)
        return resolve(newuser)
      })
    })

    return promise
  },

    // Delete Review based on ID, returns a promise
  delete (id) {
    const promise = new Promise((resolve, reject) => {
      ReviewModel.findOne({_id: id}).remove((err, removed) => {
        if (err) return reject(err)
        return resolve(removed)
      })
    })
    return promise
  }
}

export default ReviewController
