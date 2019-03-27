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

/*let movieslist=[]

app.get('/movies',(req,res)=>{

    res.render ("movies",{movies:movieslist})
})
app.post('/movies',(req,res)=>{
    res.redirect('/movies')
})

app.post('/movies/add',(req,res)=>{
    let title= req.body.title
    let description=req.body.description
    let genre = req.body.genre
    let imageUrl = req.body.imageUrl
    let id=uuidv1()

    let movie = {id:id,title:title,description:description,genre:genre,imageUrl:imageUrl}
    movieslist.push(movie)
    
    res.redirect('/movies')
})

app.post('/movies/delete',(req,res)=>{
    let id=req.body.id
    console.log(id)
    movieslist = movieslist.filter(movie => movie.id != id)
        
    res.redirect("/movies")
        
    
})


*/
app.listen(3000,()=>{
    console.log("At your service")
})