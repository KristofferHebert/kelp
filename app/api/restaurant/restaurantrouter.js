import express from 'express'

import Restaurant from './'

let RestaurantAPIRouter = express.Router()
let RestaurantClientRouter = express.Router()

RestaurantAPIRouter.get('/', (req, res) => {
  Restaurant.Controller.get()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

RestaurantAPIRouter.post('/', (req, res) => {
  var data = {
    name: req.body.name,
    address: req.body.address,
    hours: req.body.hours,
    description: req.body.description,
    images: req.body.images
  }

  Restaurant.Controller.post(data)
  .then((result) => {
    res.json(result)
  })
  .catch((err) => {
    res.status(400).json(err)
  })
})

RestaurantAPIRouter.get('/:id', (req, res) => {
  const id = req.params['id']
  Restaurant.Controller.get(id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

RestaurantAPIRouter.delete('/:id', (req, res) => {
  const id = req.params['id']
  Restaurant.Controller.delete(id)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.status(400).json(err)
      })
})

RestaurantClientRouter.get('/', Restaurant.Presenter.home)

const RestaurantRouter = {
  RestaurantAPIRouter,
  RestaurantClientRouter
}

export default RestaurantRouter
