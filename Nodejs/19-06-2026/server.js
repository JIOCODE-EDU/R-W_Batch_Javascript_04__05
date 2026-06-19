import express from "express"
const port = 3001

const app = express()

app.use(express.urlencoded())

app.set('view engine' , 'ejs')

const studentData = [
  {
    userId:1,
    name:'Zeel',
    email:'zeel@gmail.com',
    password:'zeel123'
  },
   {
    userId:2,
    name:'Rajesh',
    email:'Rajesh@gmail.com',
    password:'Rajesh123'
  },
   {
    userId:3,
    name:'Kirti',
    email:'Kirti@gmail.com',
    password:'Kirti123'
  }
]

app.get('/' , (req , res) => {
  return res.render('index')
})

app.get('/home' , (req , res) => {
  return res.render('home')
})

app.get('/form',  (req , res) => {
  return res.render('form' , {
    student:studentData
  })
})

app.post('/insertData' , (req , res) => {

  let id = req.body.userId
  let name = req.body.name
  let email = req.body.email
  let password = req.body.password

  let obj = {
    id:id,
    name:name,
    email:email,
    password:password
  }

  studentData.push(obj)

  console.log("Student Successfully Added.");
  
})

app.listen(port , (err) => {
  if (err){
    console.log("server not start");
    return false;
  }

  console.log(`server start on port ${port}`);
  
})

