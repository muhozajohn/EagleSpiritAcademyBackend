import Student from "../models/StudentModel";
import { uploadToCloud } from "../helper/cloud";

// Create Facilities

export const createStudent = async (req, res) => {
  let { title, facImage, content } = req.body;
  try {
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const makeFac = await Student.create({
      title,
      facImage:
        result?.secure_url ||
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      content,
    });
    return res.status(200).json({
      statusbar: "Success",
      message: "Student Created Well",
      data: makeFac,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Create Student",
      error: error.message,
    });
  }
};

// read

export const readStudent = async (req, res) => {
  try {
    const fetchAll = await Student.find();
    return res.status(200).json({
      statusbar: "Sucess",
      message: "All Student Fetched Well",
      data: fetchAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Cant Get All Student",
      error: error.message,
    });
  }
};
// readOne
export const readone = async (req, res) => {
  try {
    let { id } = req.params;
    const fetchAll = await Student.findById(id);
    if (!fetchAll) {
      return res.status(404).json({
        statusbar: "Job Fail",
        message: "Id Not Found",
      });
    }
    return res.status(200).json({
      statusbar: "Sucess",
      message: "All Student Fetched Well",
      data: fetchAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Cant Get All Student",
      error: error.message,
    });
  }
};
// delete
export const deletetFac = async (req, res) => {
  try {
    let { id } = req.params;
    const fetchAll = await Student.findById(id);
    if (!fetchAll) {
      return res.status(404).json({
        statusbar: "Job Fail",
        message: "Id Not Found",
      });
    }
    await Student.findByIdAndDelete();
    return res.status(200).json({
      statusbar: "Sucess",
      message: "Student Deleted Well",
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Delete Student",
      error: error.message,
    });
  }
};

// update facility

export const updateStudent = async (req, res) => {
  let { title, facImage, content } = req.body;
  try {
    let { id } = req.params;
    const getId = await Student.findById(id);
    if (!getId) {
      return res.status(404).json({
        statusbar: "Job Fail",
        message: "Id Not Found",
      });
    }
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const fetchAll = await Student.findByIdAndUpdate(id, {
      title,
      facImage:
        result?.secure_url ||
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      content,
    });
    return res.status(200).json({
      statusbar: "Sucess",
      message: "Student Updated Well",
      data: fetchAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Updated Student",
      error: error.message,
    });
  }
};
