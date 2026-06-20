import express from 'express';
const app = express()
const port = 8001
import router from './routes/studentRoutes.js';

app.use(express.urlencoded())

app.set('view engine' , 'ejs')

app.listen(port , (err) => {
  if(err){
    console.log('server not started');
  }else{
    console.log(`server start on port ${port}`);
  }
})