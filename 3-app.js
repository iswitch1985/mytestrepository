// declare module myname from 3-variables.js
const myname = require('./3-variables')
// declare module myfunc from 3-functions.js
const myfunc = require('./3-functions')

//call functions
myfunc.sayhello(myname.John)
myfunc.sayhello(myname.susan)

const myalt = require('./3-alternative-declartion')
console.log(myalt.names[1])
console.log(myalt.person.name)
console.log(myalt.person)