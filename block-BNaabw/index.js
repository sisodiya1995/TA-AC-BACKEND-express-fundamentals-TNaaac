var express = require('express');
var app = express();

// middleware
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'))



// routes
app.get('/' ,(req , res) =>{
    res.send("index page")
})

app.get('/users' ,(req , res) =>{
    res.send("users page")
})

app.get('/home' ,(req ,res) => {
    res.sendFile(__dirname +'/index.html');
})

app.get('/about' ,(req ,res) => {
    res.sendFile(__dirname +'/about.html');
})

// 404 error
app.use((req, res ,next) =>{
    res.send('Page not found')
})

// client error
app.use((err, req, res , next) => {
    res.send(err)
})

app.listen(4444 ,() => {
    console.log('server listioning on port 4k')
})