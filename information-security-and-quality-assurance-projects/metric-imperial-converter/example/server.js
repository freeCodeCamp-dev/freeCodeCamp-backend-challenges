'use strict'

const path        = require('path')
const helmet      = require('helmet')
const express     = require('express')
const bodyParser  = require('body-parser')
const cors        = require('cors')
const runner      = require('./test-runner')
require('dotenv').config()

///////////////////////////////////////////////////////////
//  Initialize Express and configure Middleware
///////////////////////////////////////////////////////////
const app = express()
app.set("port", process.env.PORT || 3000)

app.use(helmet())

app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.resolve(__dirname, "views")))

app.use(cors({origin: '*'})) //For FCC testing purposes only

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//For FCC testing purposes
require('./routes/fcctesting.js')(app)

//Routing for API 
require('./routes/routes.js')(app)

//Start our server and tests!
const server = app.listen(app.get("port"), () => {
  const {port, address, } = server.address()
  console.info(`Express server started on ${address}:${port}`)
  if(process.env.NODE_ENV==='test') {
    console.log('Running Tests...')
    setTimeout(function () {
      try {
        runner.run()
      } catch(e) {
        const error = e
          console.log('Tests are not valid:')
          console.log(error)
      }
    }, 500)
  }
})

module.exports = app //for testing
