var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'))
app.post("/json" ,(req ,res) =>{
    //capture data
    console.log(req.body);
   
});

app.post("/contact" ,(req ,res) =>{
    //capture data
    console.log(req.body);
   
});

app.get("/" ,(req ,res) =>{
    //capture data
    //console.log(req.body);
    res.sendFile(__dirname +"/index.html")
   
});

app.listen(3000, () => {
    console.log("server is listioning on port 3k")
});