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

// display student

export const home = (req , res) => {
  return res.render('index' , {students:studentData})
}

// add student 

export const addPage = () => {

}

// insert student

export const insertData = () => {

}

// delete student

export const deleteData = () => {

}

// edit student

export const editData = () => {

}

// update student

export const updateData = () => {

}