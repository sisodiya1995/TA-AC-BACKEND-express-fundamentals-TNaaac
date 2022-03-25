var express = require('express');
var app = express();

function logger(req , res ,next){
 console.log(req.url , req.method)
 next();
}

app.use(logger);

app.get("/" ,(req ,res) =>{
   res.send('welcome to index page')
})

app.listen(4000, () =>{
    console.log("server is listioning on port 4k")
});