import Faculty from "../models/FacultyModels";
import { uploadToCloud } from "../helper/cloud";

// Create Facilities

export const createFaculty = async (req, res) => {
  let { title, facImage, content } = req.body;
  try {
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const makeFac = await Faculty.create({
      title,
      facImage:
        result?.secure_url ||
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      content,
    });
    return res.status(200).json({
      statusbar: "Success",
      message: "Faculty Created Well",
      data: makeFac,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Create Faculty",
      error: error.message,
    });
  }
};

// read

export const readfacility = async (req, res) => {
  try {
    const fetchAll = await Faculty.find();
    return res.status(200).json({
      statusbar: "Sucess",
      message: "All Faculty Fetched Well",
      data: fetchAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Cant Get All Faculty",
      error: error.message,
    });
  }
};
// readOne
export const readone = async (req, res) => {
  try {
    let { id } = req.params;
    const fetchAll = await Faculty.findById(id);
    if (!fetchAll) {
      return res.status(404).json({
        statusbar: "Job Fail",
        message: "Id Not Found",
      });
    }
    return res.status(200).json({
      statusbar: "Sucess",
      message: "All Faculty Fetched Well",
      data: fetchAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Cant Get All Faculty",
      error: error.message,
    });
  }
};
// delete
export const deletetFac = async (req, res) => {
  try {
    let { id } = req.params;
    const fetchAll = await Faculty.findById(id);
    if (!fetchAll) {
      return res.status(404).json({
        statusbar: "Job Fail",
        message: "Id Not Found",
      });
    }
    await Faculty.findByIdAndDelete();
    return res.status(200).json({
      statusbar: "Sucess",
      message: "Faculty Deleted Well",
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Delete Faculty",
      error: error.message,
    });
  }
};

// update facility

export const updateFaculty = async (req, res) => {
  let { title, facImage, content } = req.body;
  try {
    let { id } = req.params;
    const getId = await Faculty.findById(id);
    if (!getId) {
      return res.status(404).json({
        statusbar: "Job Fail",
        message: "Id Not Found",
      });
    }
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const fetchAll = await Faculty.findByIdAndUpdate(id, {
      title,
      facImage:
        result?.secure_url ||
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      content,
    });
    return res.status(200).json({
      statusbar: "Sucess",
      message: "Faculty Updated Well",
      data: fetchAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Updated Faculty",
      error: error.message,
    });
  }
};
