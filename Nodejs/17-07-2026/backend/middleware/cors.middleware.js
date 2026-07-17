import cors from 'cors'

const corsOption = {
  origin:"*",
  methods:["GET" , "POST" , "PUT" , "DELETE"],
  credential:true
}

export default cors(corsOption)