// Express.js Framework

/*

A Framework is a collection of pre-written code , libreries. and tools that provides a structured way to build application quickly and efficiently.

*/

/*

1. Faster Development
2. Code Reusability
3. Better Projects Structure
4. Easy Maintenance
5. Security Features
6. Scalability

*/

/*

Express.js is a fast , lightweight , and flexible web application framework for Node.js. It simplifies server creation, routing , middleware handeling and API Developement.

*/

import express from 'express' // modulejs
// const express = require('express') // commonjs
const app = express()

app.get("/" , (req , res) => {
  res.send("Welcome to express.js server")
})

app.get("/home" , (req , res) => {
  res.send("Welcome to Home Page")
})


app.listen(3001 , () => {
  console.log("server start on port 3001");
})