const http = require('http');
const server = http.createServer(function(req,res){
    const url = req.url;
    switch(url){
        case'/':
            res.writeHead(200,{'content-type':"text/html"});
            res.write("<h1>Home Page</h1>");
            res.end();
            break;
        
        case '/about':
            res.writeHead(200,{'content-type':"text/html"});
            res.write("<h1>About Page</h1>");
            res.end();
            break;
        
        default:
            res.writeHead(404,{'content-type':"text/html"});
            res.write("<h1>Bad - Requext</h1>");
            res.write("<h4> Page Not Found </h4>")
            res.end();  
            break;
        }
})

server.listen(8080);