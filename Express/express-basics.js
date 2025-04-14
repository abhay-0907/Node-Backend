const express = require('express');

const app = express();

app.get('/',function(req,res){
    res.status(200).send("<h1>Hello World</h1>")
})

app.all('*',function(req,res){
    res.status(404).send("<h2>Oops! 404 Page not found...</h2>")
})
app.listen(5000,function(){
    console.log("Server listening on port 5000");
});