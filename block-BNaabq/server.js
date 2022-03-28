var express = require('express');
var cookieparse = require('cookie-parser')
var app = express();



app.use((req ,res , next) =>{
    res.cookie("username", "suraj");
   next();
});

app.get("/about" ,(req ,res) =>{
   res.send(res.cookie)
})

app.listen(5000, () =>{
    console.log("server is listioning on port 5k")
});