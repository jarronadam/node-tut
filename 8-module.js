const os = require('os')

// info about the current user
const user = os.userInfo()
console.log(user)

//method returns the system runtime in seconds
console.log(`The system uptime is: ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOS)