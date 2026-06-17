// create server using HTTP Module

// The http module is a built-in Node.js module used to create web server and handle http request and responses.

const http = require('http')

const server = http.createServer((req , res) => {
  res.writeHead(200 , {"Content-Type":"text/plain"})
  res.end("Welcome to Node.js Server")
})

server.listen(3000 , () => {
  console.log("server running on port 3000");
  
})