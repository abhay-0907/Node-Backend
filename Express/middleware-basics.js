const e = require("express");

const app = e();

const logger = require('../logger');

app.use(logger)
app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.get('/about',(req,res)=>{
    res.send("about page");
})



app.listen(5000);