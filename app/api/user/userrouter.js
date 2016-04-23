import express from 'express'
import validator from 'validator'

import User from './'

let UserRouter = express.Router()

UserRouter.get('/', (req, res) => {
  User.Controller.get()
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.status(400).json(err)
      })
})

UserRouter.post('/', (req, res) => {
  if (!req.body.email) {
    return res.status(400).json({
      error: 'Please provide email'
    })
  }

  if (!validator.isEmail(req.body.email)) {
    return res.status(400).json({
      error: 'Please provide valid email'
    })
  }

  console.log(req.body)

  User.Controller.post(req.body)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

UserRouter.get('/:id', (req, res) => {
  const id = req.params['id']
  User.Controller.get(id)
        .then((result) => {
          res.json(result)
        })
        .catch((err) => {
          res.status(400).json(err)
        })
})



export default UserRouter
