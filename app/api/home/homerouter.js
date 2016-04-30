import express from 'express'

import HomeProvider from './homeprovider'

let HomeRouter = express.Router()
HomeRouter.get('/', HomeProvider.home)

export default HomeRouter
