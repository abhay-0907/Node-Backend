const os = require('os');
console.log(os.userInfo())
const fm = os.freemem();
console.log(fm/(1024));
console.log(os.cpus().length)

