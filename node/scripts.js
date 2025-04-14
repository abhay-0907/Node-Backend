const express = require('express');
const app = express();
app.get('/',function(req,res){
    res.send("Hello World");
})

app.use(function(req,res,next){
    console.log("MiddleWare");
    next();
})

app.get('/profile',function(req,res){
    res.send("<h1 style=color:blue>Hello World Again</h1>")
})
app.listen(3000)