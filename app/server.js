'use strict'

import express from 'express'
import bodyParser from 'body-parser'
import passport from 'passport'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import session from 'cookie-session'
import path from 'path'
import LocalStrategy from 'passport-local'
import exphbs from 'express-handlebars'

import UserModel from './api/user/usermodel'
import config from './config'
import routes from './api/routes'

const app = express()

// Set public folder
app.use(express.static(path.join(__dirname, '/public')))

// Compress all assets
app.use(compression())

// Adding Templating Engine
app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'view')
}))

app.set('view engine', '.hbs')

// Adding Middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session(config.keys))

// Adding Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

// Configuring Passport sessions for users
passport.use(new LocalStrategy(UserModel.authenticate()))
passport.serializeUser(UserModel.serializeUser())
passport.deserializeUser(UserModel.deserializeUser())

// Add routes
app.use(routes)

// Launch app on PORT 8089
app.listen(config.port, () => {
  console.log('Listening on PORT', config.port)
})
