const { urlencoded } = require('express');
var express = require('express');
var app = express();


//middleware
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended : false}))

app.get('/' ,(req ,res) => {
   res.sendFile(__dirname + "/public/index.html")
})

app.get('/new' ,(req ,res) => {
    res.sendFile(__dirname + "/public/form.html")
 })

 app.get('/users/:username' ,(req ,res) => {
    var username = req.params.username;
    res.send(username)
 })

 app.post('/new' ,(req ,res) => {
   // res.sendFile(__dirname +"/public/form.html")
     res.send(req.body);
 })


app.listen(8000 ,() => {
    console.log("servr listion on port 8k")
})