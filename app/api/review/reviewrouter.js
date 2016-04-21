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

    if (!validator.isNumeric(req.body.stars)) {
        return res.status(400).json({
            error: "Please provide valid stars as number"
        })
    }

    Review.Controller.post({
        title: req.body.title,
        owner_id: req.body.owner_id,
        restaurant_id: req.body.restaurant_id,
        body: req.body.body,
        stars: req.body.stars
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

ReviewRouter.delete('/:id', (req, res) => {
    const id = req.params['id']
    Review.Controller.delete(id)
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

export default ReviewRouter
