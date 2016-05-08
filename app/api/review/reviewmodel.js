import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ReviewSchema = new Schema({
  title: {
    type: String,
    maxlength: 100,
    required: true
  },
  owner_id: {
    type: String,
    required: true
  },
  owner_name: {
    type: String,
    required: true
  },
  restaurant_id: {
    type: String,
    required: true
  },
  body: {
    type: String,
    maxlength: 300,
    required: true
  },
  stars: {
    type: Number,
    max: 5,
    min: 1,
    required: true
  }
},
  {
    timestamps: true
  })

const ReviewModel = mongoose.model('review', ReviewSchema)

export { ReviewModel, ReviewSchema }
