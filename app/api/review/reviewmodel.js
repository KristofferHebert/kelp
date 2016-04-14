import db from '../db'

const Schema = db.Schema

const ReviewSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    restaurant: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    }
})

const ReviewModel = db.model('review', ReviewSchema)

export default ReviewModel
