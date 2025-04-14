const express = require('express');

const router = express.Router();

// route for post request
router.post("/",function(req,res){
    const{name} = req.body;
    console.log(req.body);
    if(name){
        return res.status(200).send(`<h1> Welcome ${name}</h1>`);
    }
    res.send("Provide the crendential...");
})

module.exports = router;
