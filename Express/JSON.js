const {products} = require('../data');
const express = require('express');
const  app = express();



app.get('/',function(req,res){
    res.json(products);
})


app.listen(5000);
