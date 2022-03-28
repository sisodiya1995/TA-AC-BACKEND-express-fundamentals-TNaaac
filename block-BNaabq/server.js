var express = require('express');
var cookieparse = require('cookie-parser')
var app = express();
var logger = require('morgan')

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookieparse());
app.use(logger('tiny'))

app.use("/about",(req ,res , next) =>{
    res.cookie("username", "akash");
    res.end("this is about page")
   next();
});

app.use((req ,res , next) => {
    console.log(req.cookies)
   next();
});

app.get("/" ,(req ,res) => {
   res.send(res.cookie)
})

app.listen(5000, () => {
    console.log("server is listioning on port 5k")
});