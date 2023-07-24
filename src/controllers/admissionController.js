import Admimision from "../models/adimisionModel";
export const createAdmission = async (req, res) => {
  try {
    let { before, deadline, programDesign, Acceleration } = req.body;
    const create = await Admimision.create({
      before,
      deadline,
      programDesign,
      Acceleration,
    });
    return res.status(200).json({
      statusbar: "Success",
      message: "Admimision Added Well",
      data: create,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Create Adimision",
      error: error.message,
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const getAll = await Admimision.find();
    return res.status(200).json({
      statusbar: "Success",
      message: "All Admision Fetched Well",
      data: getAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't GetAll Admision",
      error: error.message,
    });
  }
};

export const getSingle = async (req, res) => {
  try {
    const { id } = req.params;
    const getSingle = await Admimision.findById(id);
    if (!getSingle) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    return res.status(200).json({
      statusbar: "Job Done",
      message: "Single Admimision Geted Well",
      data: getSingle,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't GetSingle Admision",
      error: error.message,
    });
  }
};

export const updateAdmision = async (req, res) => {
  try {
    const { id } = req.params;
    let { before, deadline, programDesign, Acceleration } = req.body;
    const getId = await Admimision.findById(id);
    if (!getId) {
      return res.status(404).json({
        statusbar: "Job Fail",
        message: "Id not Found",
      });
    }
    const update = await Admimision.findByIdAndUpdate(id, {
      before,
      deadline,
      programDesign,
      Acceleration,
    });
    return res.status(200).json({
      statusbar: "Job Done",
      message: "Admision Updated Well",
      data: update,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't GetSingle Admision",
      error: error.message,
    });
  }
};

export const deleteAdmision = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAd = await Admimision.findByIdAndDelete(id);
    if (!deleteAd) {
      return res.status(404).json({
        statusbar: "Job Fail",
        message: "Id Not Found",
      });
    }
    return res.status(201).json({
      statusbar: "Job Done",
      message: "Admision Deleted Well",
      data: deleteAd,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Delete  Admision",
      error: error.message,
    });
  }
};
