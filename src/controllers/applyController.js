import apply from "../models/applyModels";
import { uploadToCloud } from "../helper/cloud";
// create
export const createApplication = async (req, res) => {
  let {
    pname,
    pnumber,
    pmail,
    pnationality,
    pcity,
    pstate,
    stName,
    stMiddleName,
    stLname,
    stProfile,
    stGender,
    stBirth,
    stMail,
    stNationality,
    stCity,
    stState,
  } = req.body;
  try {
    const result = await uploadToCloud(req.file, res);
    const application = await apply.create({
      pname,
      pnumber,
      pmail,
      pnationality,
      pcity,
      pstate,
      stName,
      stMiddleName,
      stLname,
      stProfile:
        result?.secure_url ||
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      stGender,
      stBirth,
      stMail,
      stNationality,
      stCity,
      stState,
    });
    return res.status(201).json({
      statusbar: "success",
      message: "Application created successfully",
      data: application,
    });
  } catch (error) {
    res.status(500).json({
      statusbar: "Failed",
      message: "Application Failed to be Created",
      error: error.message,
    });
  }
};
// Get Alll
export const getAllAplicant = async (req, res) => {
  try {
    const getAll = await apply.find();
    return res.status(200).json({
      statusbar: "success",
      message: "All Applicant fetched successfully",
      data: getAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Faliled to retrive all Applicant",
      error: error.message,
    });
  }
};
// getAll By id
export const getApplicantByID = async (req, res) => {
  try {
    const { id } = req.params;
    const getId = await apply.findById(id);
    if (!getId) {
      return res.status(201).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    return res.status(200).json({
      statusbar: "Success",
      message: "Single Student Fetched Well",
      data: getId,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Retrieve Single Student",
      error: error.message,
    });
  }
};
// update
export const updateApplicant = async (req, res) => {
  let {
    pname,
    pnumber,
    pmail,
    pnationality,
    pcity,
    pstate,
    stName,
    stMiddleName,
    stLname,
    stProfile,
    stGender,
    stBirth,
    stMail,
    stNationality,
    stCity,
    stState,
  } = req.body;
  try {
    const { id } = req.params;
    const getOne = await apply.findById(id);
    if (!getOne) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    const updateApp = await apply.findByIdAndUpdate(
      id,
      {
        pname,
        pnumber,
        pmail,
        pnationality,
        pcity,
        pstate,
        stName,
        stMiddleName,
        stLname,
        stProfile,
        stGender,
        stBirth,
        stMail,
        stNationality,
        stCity,
        stState,
      },
      { new: true }
    );
    return res.status(201).json({
      statusbar: "Success",
      message: "Applicant Updated Well",
      data: updateApp,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Update Applicant",
      error: error.message,
    });
  }
};

// delete
export const DeleteApplicant = async (req, res) => {
  try {
    const { id } = req.params;
    const getId = await apply.findById(id);
    if (!getId) {
      return res.status(201).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    const deleteApp = await apply.findByIdAndDelete(id);
    return res.status(200).json({
      statusbar: "Success",
      message: "Applicant Deleted Well!",
      data: deleteApp,
    });
    return;
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Delete Applicant",
      error: error.message,
    });
  }
};
