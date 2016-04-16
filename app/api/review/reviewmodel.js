import db from '../db'

const Schema = db.Schema

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
})

const ReviewModel = db.model('review', ReviewSchema)

export default ReviewModel
