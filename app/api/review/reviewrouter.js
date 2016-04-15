import express from 'express'
import validator from 'validator'

import Review from './'

let ReviewRouter = express.Router()

ReviewRouter.get('/', (req, res) => {
    Review.Controller.get()
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

ReviewRouter.post('/', (req, res) => {
    if(!req.body.email) {
        return res.status(400).json({
            error: "Please provide email"
        })
    }

    if(!validator.isEmail(req.body.email)) {
        return res.status(400).json({
            error: "Please provide valid email"
        })
    }

    Review.Controller.post({
        email: req.body.email,
        password: req.body.password
    })
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
})


ReviewRouter.get('/:id', (req, res) => {
    const id = req.params['id']
    Review.Controller.get(id)
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})



export default ReviewRouter
