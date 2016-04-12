import express from 'express'

import User from './'

let UserRouter = express.Router

UserRouter.get('/:id?', (req, res) => {
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
