const EventEmitter = require('events');
const { emit } = require('process');
const emitter = new EventEmitter();

emitter.on('greet',(name)=>{
    console.log(`Hello ${name}`);
})

emitter.on('greet',()=>{
    setTimeout(()=>{
        
        console.log("Good Morning");
    },3000);
});

emitter.emit('greet','Abhay');