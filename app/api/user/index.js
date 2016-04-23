import UserController from './usercontroller'
import UserModel from './usermodel'
import UserPresenter from './userpresenter'
import UserRouter from './userrouter'

const User = {
  Model: UserModel,
  Controller: UserController,
  Presenter: UserPresenter,
  Router: UserRouter
}

export default User
