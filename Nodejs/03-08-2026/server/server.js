import express from 'express'
import dotenv from 'dotenv'
import dns from 'dns'
import app from './app.js'
import DBconnect from './config/db.js'

const server = dns.setServers(['8.8.8.8' , '8.4.8.4'])

dotenv.config({
  path:"./.env"
})

DBconnect()

const port = process.env.PORT

app.listen(port , () => {
  console.log(`Server Start : http://localhost:${port}`);
})