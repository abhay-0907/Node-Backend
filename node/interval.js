function printName(name){
    console.log("Name: "+name);
}
function printAge(age){
    console.log("Age: "+age);
}
function printAddress(address){
    console.log("Address: "+address);
}
setInterval(()=>{
    setTimeout(printName,1000,"Abhay");
    setTimeout(printAge,2000,21);
    setTimeout(printAddress,3000,"Delhi");
},4000)