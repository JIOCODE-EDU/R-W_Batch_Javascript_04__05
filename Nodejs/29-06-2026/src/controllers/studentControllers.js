import Students from "../models/StudentModel.js";

export const getStudents = async (req , res) => {
  try{
    const {search , sort} = req.body

    let filter = {};

    if(search){
      filter.name = {
        $regex:search,
        $option:"i"
      }
    }

    let students = Students.find(filter)

    if(sort){
      students = students.sort(sort)
    }

    students = await students;

  }catch(error){
    res.status(500).json({
      message:error.message
    })
  }
}