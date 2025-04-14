const express = require('express');
const app = express();

// middleware function
const logger = (req,res,next)=>{
    console.log(`Method: ${req.method} \npath: ${req.url}`);
    next();
}

app.use(logger) // globally applied Middleware

app.get('/',(req,res)=>{
    res.send("<h2> Hello World</h2>");
})

app.listen(3000,()=>{
    console.log("Server Running on port 3000");
})