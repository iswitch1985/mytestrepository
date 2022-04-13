//declare fs as the whole module
const fs = require('fs')
//declare only readFileSync and writeFileSync functions from fs module
const {readFileSync, writeFileSync} = require('fs')

const firsttext = readFileSync('./folder/first.txt', 'utf8')
const secondtext = readFileSync('./folder/second.txt','utf8')

console.log(firsttext, secondtext)

writeFileSync('./folder/result.txt', `the result text is: ${firsttext + secondtext}`)
// to append 
//writeFileSync('./folder/result.txt', `the result text is: ${firsttext + secondtext}`,{flag:'a'})