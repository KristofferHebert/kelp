'use strict'

import express from 'express'
import mongoose from 'mongoose'
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
import routes from './api/routes/'

const app = express()

// Set public folder
app.use(express.static(path.join(__dirname, '/public')))

// Config DB Connection
mongoose.connect('mongodb://localhost/' + config.database)

// Compress all assets
app.use(compression())

// Configure Handlebars
const hbs = exphbs.create({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, '/views/layouts'),
  helpers: {
    safeString: function (object) {
      return JSON.stringify(object)
    }
  }
})

// exphbs.registerHelper('safeString', function (object) {
//   return new exphbs.SafeString(object)
// })

// Adding Templating Engine
app.engine('.hbs', hbs.engine)

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', '.hbs')

// Adding Middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
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
