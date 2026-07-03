/*express-validator*/

import express from "express"
import dotenv from 'dotenv'

dotenv.config({
  path:'./.env'
})

const port = process.env.PORT || 6001

const app = express()

app.listen(port , (err) => {
  console.log(`server start on port ${port}`);
})
