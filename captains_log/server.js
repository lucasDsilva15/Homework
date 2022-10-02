//Load packages
const express = require('express')
const methodOverride = require('method-override')

//load mongoConfig from config file
const mongoConfig = require('./config')

//Bring in our routes
const captainsLogRoutes = require('./routes/captains_logroutes')

require('dotenv').config()

//create our app
const app = express()

//Set up view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(express.json()) //body parser
app.use(methodOverride("_method"))
app.use('/logs', captainsLogRoutes)

//define port
const port = 5000

//listen to app
app.listen(port, () => console.log('listening on port', port))

//connect to DB
mongoConfig()


