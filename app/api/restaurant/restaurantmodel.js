import db from '../db'
import ReviewSchema from '../review/reviewmodel'
const Schema = db.Schema

const RestaurantSchema = new Schema({
  name: {
    type: String,
    maxlength: 100,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  reviews: [ ReviewSchema ]
})

const RestaurantModel = db.model('review', RestaurantSchema)

export default RestaurantModel
