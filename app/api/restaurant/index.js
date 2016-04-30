import RestaurantController from './restaurantcontroller'
import RestaurantModel from './restaurantmodel'
import RestaurantPresenter from './restaurantpresenter'
import RestaurantRouter from './restaurantrouter'

const Restaurant = {
  Model: RestaurantModel,
  Controller: RestaurantController,
  Presenter: RestaurantPresenter,
  Router: RestaurantRouter
}

export default Restaurant
