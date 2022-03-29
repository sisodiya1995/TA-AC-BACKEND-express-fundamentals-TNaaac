var express = require("express");
var app = express();

// middleware

app.get("/", (req, res) => {
  res.send("index page");
});

app.get("/about", (req, res) => {
  res.send("about  page");
});

app.use((req, res, next) => {
  res.send("Page not found");
  //next()
});

app.use('/admin' ,(req , res , next) => {
    next("Unauthorised")
})

app.use((err,req , res , next) => {
    res.send(err);
})


// app.use((req, res, next) => {
//     // if requested url is /admin throw error
//     if (req.url === "admin") {
//       return next("Unauthorized");
//     }
//     // other let it pass to next middleware by simply calling next()
//     next();
//   });

app.listen(4000, () => {
  console.log("server is listioning on port 4k");
});
