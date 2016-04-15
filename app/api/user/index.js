import db from '../db'
import ReviewController from './usercontroller'
import ReviewModel from './usermodel'
import ReviewPresenter from './userpresenter'
import ReviewRouter from './userrouter'

const Review = {
    Model: ReviewModel,
    Controller: ReviewController,
    Presenter: ReviewPresenter,
    Router: ReviewRouter
}

export default Review
