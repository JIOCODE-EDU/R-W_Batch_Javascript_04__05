const http = require('http')

const server = http.createServer((req , res) => {
  res.send("Hello World!!")
})

server.listen(3001 , (err) => {
  console.log("Server start on port 3001");
})

