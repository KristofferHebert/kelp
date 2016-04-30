import mongoose from 'mongoose'
import ReviewSchema from '../review/reviewmodel'

const Schema = mongoose.Schema

const RestaurantSchema = new Schema({
  name: {
    type: String,
    maxlength: 100,
    required: true
  },
  address: {
    type: String,
    maxlength: 100,
    required: true
  },
  hours: {
    type: String,
    maxlength: 100,
    required: true
  },
  description: {
    type: String,
    maxlength: 400,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  reviews: [ ReviewSchema ]
})

const RestaurantModel = mongoose.model('restaurant', RestaurantSchema)

export default RestaurantModel
