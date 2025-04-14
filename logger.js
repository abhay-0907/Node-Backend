const logger = (req,res,next)=>{
    const data = new Date().getFullYear()

    const param = req.param;
    const url= req.url;
    console.log(data, url, param);
    
next()
}

module.exports = logger;