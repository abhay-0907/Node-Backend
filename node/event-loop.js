const fs = require('fs');
console.log("Start");

fs.readFile('new.txt','utf-8',(err, res)=>{
    console.log(res);
})
console.log("End");