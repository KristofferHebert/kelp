'use strict'

import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'

import config from './config'
import routes from './api/routes'

const app = express()

// Set public folder
app.use(express.static(__dirname + '/public'))

// Compress all assets
app.use(compression())

// Use body parser
app.use(bodyParser.urlencoded({ extended: true }))

// Add routes
app.use(routes)

// Launch app on PORT 8082
app.listen(config.port, () => {
    console.log('Listening on PORT', config.port)
})
