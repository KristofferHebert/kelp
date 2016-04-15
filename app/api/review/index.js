import db from '../db'
import ReviewController from './usercontroller'
import ReviewModel from './usermodel'


const Review = {
    Model: ReviewModel,
    Controller: ReviewController
}

export default Review
