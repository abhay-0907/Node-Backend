const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    if(req.url==='/favicon.ico') return res.end();

    console.log(req);
    // fs.appendFile('./log.txt',re)
    switch(req.url){
        case '/':res.end('home Page');
        break;
        case '/about': res.end("about Page");
        break;
        default:res.end('404 page not found');
    }


})

server.listen(3000);