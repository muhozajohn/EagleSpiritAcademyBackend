import facilitiesModel from "../models/FacilitiesModel";
import { uploadToCloud } from "../helper/cloud";

// Create Facilities

export const createFacility = async (req, res) => {
  let { title, facImage, content } = req.body;
  try {
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const makeFac = await facilitiesModel.create({
      title,
      facImage:
        result?.secure_url ||
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      content,
    });
    return res.status(200).json({
      statusbar: "Success",
      message: "Facility Created Well",
      data: makeFac,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Create Facility",
      error: error.message,
    });
  }
};

// read

export const readfacility = async (req, res) => {
  try {
    const fetchAll = await facilitiesModel.find();
    return res.status(200).json({
      statusbar: "Sucess",
      message: "All Facility Fetched Well",
      data: fetchAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Cant Get All Facility",
      error: error.message,
    });
  }
};
// readOne
export const readone = async (req, res) => {
  try {
    let { id } = req.params;
    const fetchAll = await facilitiesModel.findById(id);
    if (!fetchAll) {
      return res.status(404).json({
        statusbar: "Job Fail",
        message: "Id Not Found",
      });
    }
    return res.status(200).json({
      statusbar: "Sucess",
      message: "All Facility Fetched Well",
      data: fetchAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Cant Get All Facility",
      error: error.message,
    });
  }
};
// delete
export const deletetFac = async (req, res) => {
  try {
    let { id } = req.params;
    const fetchAll = await facilitiesModel.findById(id);
    if (!fetchAll) {
      return res.status(404).json({
        statusbar: "Job Fail",
        message: "Id Not Found",
      });
    }
    await facilitiesModel.findByIdAndDelete();
    return res.status(200).json({
      statusbar: "Sucess",
      message: "Facility Deleted Well",
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Delete Facility",
      error: error.message,
    });
  }
};

// update facility

export const updateFacility = async (req, res) => {
  let { title, facImage, content } = req.body;
  try {
    let { id } = req.params;
    const getId = await facilitiesModel.findById(id);
    if (!getId) {
      return res.status(404).json({
        statusbar: "Job Fail",
        message: "Id Not Found",
      });
    }
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const fetchAll = await facilitiesModel.findByIdAndUpdate(id, {
      title,
      facImage:
        result?.secure_url ||
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      content,
    });
    return res.status(200).json({
      statusbar: "Sucess",
      message: "Facility Updated Well",
      data: fetchAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Updated Facility",
      error: error.message,
    });
  }
};
