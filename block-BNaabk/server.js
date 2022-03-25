var express = require('express');
var app = express();

app.get("/" ,(req ,res) =>{
   res.send('welcome to index page')
})

app.listen(3000, () =>{
    console.log("server is listioning on port 3k")
});
