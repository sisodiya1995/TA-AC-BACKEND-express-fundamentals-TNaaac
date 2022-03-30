var express = require('express');
var app = express();
var logger = require('morgan')
var cookieParser = require('cookie-parser')

// middleware
app.use(express.json())
app.use(express.urlencoded({extended :false}))
app.use(logger('dev'))
app.use(cookieParser())

app.use((req ,res ,next) => {
    res.cookie("name","aksh")
    next()
})

// routes

app.get('/' ,(req ,res) => {
    
    res.send("<h2> Welcome to express </h2>")
})

app.get('/about' ,(req ,res) => {
    res.send("My name is qwerty")
})

app.post('/form' ,(req ,res ) => {
    res.send(req.body)
})

app.post('/json' ,(req ,res ) => {
  
    res.send((req.body))
})

app.get('/users/:username' ,(req , res) =>{
    var username = req.params.username
    res.send(username);
})

// 505(custom middleware)
app.use((err , req ,res ,next) => {
  res.send(err);
})

// 404 middleware
app.use((req ,res ,next) => {
    res.send("page not founnd")
})
app.listen(3000 , () => {
    console.log("server listion on port 3k")
})