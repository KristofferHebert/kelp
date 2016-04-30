import Restaurant from './index'

const RestaurantPresenter = {
  home (req, res) {
    Restaurant.Controller.get()
      .then((results) => {
        res.render('page', {
          __initialstate: results
        })
      })
  }
}

export default RestaurantPresenter
