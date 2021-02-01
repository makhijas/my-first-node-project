const myModule = require("./myModule")
const myOtherModule = require("./myOtherModule")
const modulePractice = require("./modulePractice")


console.log("Hello World!"); 

function hello(name) {
    console.log(`Hello, ${name}`);
}

hello("MOCHA")
hello("JC")

console.log(myModule.add(2, 2))
console.log(myModule.subtract(5,4))

//my other module
myOtherModule.welcomeToNode();

modulePractice.feels("Grrrreat!")