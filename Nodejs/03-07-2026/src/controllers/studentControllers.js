import Students from "../models/StudentModel.js";

// new student create

export const createStudent = async (req, res) => {
  try {
    const student = await Students.create(req.body);

    const accept = req.headers.accept || "";
    if (
      accept.includes("text/html") ||
      req.is("application/x-www-from-urlencoded")
    ) {
      return res.redirect("/students");
    }

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
    const { search, sort } = req.query;

    let filter = {};

    if (search) {
      filter.name = {
        $regex: search,
        $options: "i",
      };
    }

    let students = Students.find(filter);

    if (sort) {
      students = students.sort(sort);
    }

    students = await students;

    const accept = req.headers.accept || "";
    if (
      accept.includes("text/html") ||
      req.is("application/x-www-from-urlencoded")
    ) {
      return res.render("index", { students, search: search || "" });
    }

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

    const accept = req.headers.accept || "";
    if (
      accept.includes("text/html") ||
      req.is("application/x-www-from-urlencoded")
    ) {
      return res.render("view", { student });
    }

    res.status(200).json({
      success: true,
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// student update

export const updateStudent = async (req, res) => {
  try {
    const student = await Students.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!student) {
      return res.status(404).json({
        message: "Student Not Found",
      });
    }

    const accept = req.headers.accept || "";
    if (
      accept.includes("text/html") ||
      req.is("application/x-www-from-urlencoded")
    ) {
      return res.redirect('/students')
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

        const accept = req.headers.accept || "";
    if (
      accept.includes("text/html") ||
      req.is("application/x-www-from-urlencoded")
    ) {
      return res.redirect('/students')
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
