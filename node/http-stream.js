const {createServer} = require('http');

const { createReadStream} = require('fs');

createServer((req,res)=>{
    const fileStream = createReadStream("./content/big-file.txt");
    fileStream.on("data",function(result){
        fileStream.pipe(res.end(result)
        ) // pipe is use for write the data in chunks 
    })
    fileStream.on('err',(err)=>console.log(err)
    );
}).listen(8080)