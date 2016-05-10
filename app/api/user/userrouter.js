import express from 'express'
import validator from 'validator'

import User from './'

let UserAPIRouter = express.Router()
let UserClientRouter = express.Router()

UserAPIRouter.get('/', (req, res) => {
  User.Controller.get()
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.status(400).json(err)
      })
})

UserAPIRouter.post('/', (req, res) => {
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

  User.Controller.post(req.body)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

UserAPIRouter.get('/:id', (req, res) => {
  User.Controller.get(req.params['id'])
        .then((result) => {
          res.json(result)
        })
        .catch((err) => {
          res.status(400).json(err)
        })
})

UserAPIRouter.post('/login', (req, res) => {
  User.Controller.login(req.body.email, req.body.password)
        .then((result) => {
          res.cookie('userid', result._id, { maxAge: 2592000000 })
          res.redirect('/')
        })
        .catch((err) => {
          res.status(400).json(err)
        })
})

UserClientRouter.get('/login', User.Presenter.login)

UserClientRouter.get('/signup', User.Presenter.signup)

UserClientRouter.get('/signout', (req, res) => {
  req.logout()
  res.redirect('/')
})

const UserRouter = {
  UserClientRouter,
  UserAPIRouter
}

export default UserRouter
