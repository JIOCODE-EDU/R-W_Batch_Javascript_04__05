// Basics of Modules in Node.js

// Modules are reusable blocks of code in Node.js. They help organize code into seperate files and functions.

// Types of Modules

/*

1. Core Modules
2. Local Modules
3. Third-Party Modules

*/

// 1. Core Module

// Core module are built-in modules provided by Node.js. No Installation is required.

const fs = require('fs')

fs.writeFileSync("demo.txt" , "Hello Node.js")

console.log("File Created");

const os = require('os')
console.log(os.platform());
console.log(os.arch());


// Local Modules

// Local Modules are custom modules created by the developer inside the project.

const add = require('./demo/math')

console.log(add(10 , 20));

// 3. Third-Party Modules

// Third-Party modules are external pakages installed using npm(Node Package Manager)

console.log("Hello World!");




