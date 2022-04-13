//in this js file, we define some functions
const sayhello = (name) => {
console.log(`Hello ${name}`)
}

//make function hello can be accessed from other modules
module.exports = { sayhello }