const http = require('http')
const fs = require('fs')

const server = http.createServer((req , res) => {
  fs.readFile("index.html" , (err , data) => {
    if(err){
      res.writeHead(500 , {"Content-Type" : "text/plain"})
      res.end("File not found")
    }
    else{
      res.writeHead(200 , {"Content-Type":"text/plain"})
    }

    res.end(data)
  })
})

server.listen(3001 , () => {
  console.log("server running on port 3001");
})