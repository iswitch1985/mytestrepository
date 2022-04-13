const os = require('os')

//Current user
console.log(os.userInfo())

//system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

//other system info
const additionalos = {
    type: os.type(),
    release: os.release(),
    totalmemory: os.totalmem(),
    freememory: os.freemem()
}
console.log(additionalos)