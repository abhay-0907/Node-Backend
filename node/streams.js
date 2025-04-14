const {createReadStream} = require('fs');

const streams = createReadStream('./content/big-file.txt');
const stream = createReadStream('./content/big-file.txt',{highWaterMark:900000});

const readStream = createReadStream('./content/big-file.txt',{highWaterMark:900000, encoding:'utf-8'});
// streams.on('data',(result)=>{
//     console.log(result);
// })

// stream.on('data',(res)=>{
//     console.log(res)
// })


readStream.on('data',(res)=>console.log(res))


//! default size = 64kb
//! highWaterMark = for control the size

//! lastbuffer = remainder of the file
//! encoding - utf-8 = for reading the content of the file
// stream1.on('data',(result)=>{
//     console.log(result);
// })