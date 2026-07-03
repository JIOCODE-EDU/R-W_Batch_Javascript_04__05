import Students from "../models/StudentModel.js";.

// new student create

export const createStudent = async (req, res) => {
  try {
    const student = await Students.create(req.body);

    res.status(201).json({
      success: true,
      message: "Student Created Successfully.",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// all students

export const getStudents = async (req, res) => {
  try {
    const { search, sort } = req.body;

    let filter = {};

    if (search) {
      filter.name = {
        $regex: search,
        $option: "i",
      };
    }

    let students = Students.find(filter);

    if (sort) {
      students = students.sort(sort);
    }

    students = await students;

    res.status(200).json({
      success: true,
      total: students.length,
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// single student 

export const getStudent = async (req, res) => {
  try {

    const student = await Students.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student Not Found",
      });
    }

    res.status(200).json({
      success:true,
      data:student
    })


  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// student update

export const updateStudent = async (req, res) => {
  try {

    const student = await Students.findByIdAndUpdate(req.params.id , req.body, {
      new: true,
      runValidators: true,
    });

    if (!student) {
      return res.status(404).json({
        message: "Student Not Found",
      });
    }

    res.json({
      success: true,
      message: "Student Updated",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// student update via Query

export const updateStudentQuery = async (req, res) => {
  try {
    const { id } = req.query;

    const student = await Students.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!student) {
      return res.status(404).json({
        message: "Student Not Found",
      });
    }

    res.json({
      success: true,
      message: "Student Updated",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Student

export const deleteStudent = async (req, res) => {
  try {

    const student = await Students.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student Not Found",
      });
    }

    res.json({
      success: true,
      message: "Student Deleted Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Student Delete via Query

export const deleteStudentByQuery = async (req, res) => {
  try {
    const { id } = req.query;

    const student = await Students.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).json({
        message: "Student Not Found",
      });
    }

    res.json({
      success: true,
      message: "Student Deleted Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
