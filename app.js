const express= require('express')
const mustacheExpress = require('mustache-express')
const bodyParser= require('body-parser')
const uuidv1 = require('uuid/v1')
const path = require('path')
const movieRoutes = require('./routes/movies')
const app = express()
const VIEWS_PATH = path.join(__dirname, './views')


app.engine('mustache',mustacheExpress())
app.set ('views','./views')
app.set ('view engine','mustache')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/css',express.static('css'))
app.use('/',movieRoutes)


app.listen(3000,()=>{
    console.log("At your service")
})