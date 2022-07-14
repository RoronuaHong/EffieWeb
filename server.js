require('dotenv').config()

const express = require('express')
const app = express()

let bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.port

app
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))

  require(`${__dirname}/app/routes`)(app)

  app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
  })

  