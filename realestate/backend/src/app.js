import express from 'express'
import helmet from 'helmet'
import router from './routes/index.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv/config' // eslint-disable-line no-unused-vars
import config from './config/config.js'
import { errorHandler } from './middlewares/errors.middleware.js'

const app = express()

mongoose
  .connect(config.database.connection)
  .catch((error) =>
    console.error('an error occured when connecting to database', error)
  )

app.use(express.json())
app.use(helmet())

app.use('/api', router)

// register error handlers
app.use(errorHandler)

export default app
