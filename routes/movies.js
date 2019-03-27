const express = require('express')
const router = express.Router()
const uuidv1 = require('uuid/v1')

let movieslist=[]


router.get('/movies',(req,res)=>{

    res.render ("movies",{movies:movieslist})
})
router.post('/movies',(req,res)=>{
    res.redirect('/movies')
})

router.post('/movies/add',(req,res)=>{
    let title= req.body.title
    let description=req.body.description
    let genre = req.body.genre
    let imageUrl = req.body.imageUrl
    let id=uuidv1()

    let movie = {id:id,title:title,description:description,genre:genre,imageUrl:imageUrl}
    movieslist.push(movie)
    
    res.redirect('/movies')
})

router.post('/movies/delete',(req,res)=>{
    let id=req.body.id
    console.log(id)
    movieslist = movieslist.filter(movie => movie.id != id)
        
    res.redirect("/movies")
        
    
})

router.get('/movies/movieId',(req,res)=>{
    
    
    res.render("moviesId",{movie:movie})
})

router.post('/movies/movieId',(req,res)=>{
    let id=req.body.id
    console.log(id)
    let movie = movieslist.filter(movie => movie.id == id)
    console.log(movie)
    res.render("moviesId",{movie:movie})
})

//return JSon file
router.get('/api/moviehes',(req,res)=>{
    res.json(movieslist)

})

router.post ('/movies/return',(req,res)=>{
    res.redirect('/movies')
})

router.get('/movies/:genre',(req,res)=>{
    let genre=req.params.genre
    let moviegenre= movieslist.filter(movie => movie.genre ==genre)
    res.render('movies',{movies:moviegenre})

})

module.exports = router