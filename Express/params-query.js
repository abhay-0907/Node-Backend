const express = require('express');
const app = express();

const {products} = require('../data');
const { name } = require('ejs');

app.get('/', function(req,res){
    res.send('<h1> Home Page </h1> <a href="api/products">products</a>')
});

app.get('/api/products',function(req,res){
     const newProduct = products.map((item) => {
        const { id, image, price,name } = item;
        return { id, image, price, name };
    });
    res.json(newProduct);

})

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);
    const {search,limit} = req.query
    let sortdProducts = [...products]

    if(search){
        sortdProducts =sortdProducts.filter((e)=>{
            return e.name.startsWith(search);
        }) 
    }
    if(limit){
        sortdProducts = sortdProducts.slice(0,Number(limit));
    }
    if(limit<1){
        return res.send("Sorry! this type of product we don't have")
    }
    res.status(200).json(sortdProducts);
    
    // res.send(products);
})

app.listen(5000 ,()=>{console.log("Sever listening on port 5000");
})