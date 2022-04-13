const path = require('path')

//seperator '\' or '/'
console.log(path.sep)

//build a path
const mypath = path.join('/folder','project','myservice.cds')
console.log(mypath)
//get base file(myservice.cds) in last path
console.log(path.basename(mypath));

//
const absolute = path.resolve(__dirname,'folder','project','myservice.cds')
console.log(absolute)