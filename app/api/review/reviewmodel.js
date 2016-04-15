import db from '../db'

const Schema = db.Schema

const ReviewSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    owner_id: {
        type: String,
        required: true
    },
    restaurant_id: {
        type: String,
        required: true
    },
    body: {
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
