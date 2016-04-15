import db from '../db'
import ReviewController from './reviewcontroller'
import ReviewModel from './reviewmodel'
import ReviewPresenter from './reviewpresenter'
import ReviewRouter from './reviewrouter'

const Review = {
    Model: ReviewModel,
    Controller: ReviewController,
    Presenter: ReviewPresenter,
    Router: ReviewRouter
}

export default Review
