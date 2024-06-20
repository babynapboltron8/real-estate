import 'dotenv/config'
import app from './app.js'
import config from './config/config.js'

app.listen(config.port, () => {
  console.log(`Listening in port: http://localhost:${config.port}`)
})
