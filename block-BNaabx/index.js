var express = require('express');
var app = express();
//var logger = require('morgan');
var cookieParser = require('cookie-parser')

function logger(req ,res ,next) {
  console.log(req.method ,req.url )
  next(); 
}


// midddleware
app.use(logger)
app.use(cookieParser())
app.use("/json" ,(req ,res ,next) => {
    res.json(req.body)
    next();
})


app.post('/json',(req ,res) => {
   console.log(req.body)
})

app.listen(5000 , () => {
    console.log('server listion on port 5k')
})