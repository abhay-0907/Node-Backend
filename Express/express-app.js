const express = require("express");
const app = express();
const path = require('path');

// middleware for static file 
app.use(express.static(path.join(__dirname,'..' ,'public')));

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'..','Demo-app','index.html'));
})

app.listen(5000);