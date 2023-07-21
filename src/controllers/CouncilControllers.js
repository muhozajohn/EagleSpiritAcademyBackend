import council from "../models/councilModel";
import { uploadToCloud } from "../helper/cloud";
export const createCouncil = async (req, res) => {
  let { name, councilImage, content } = req.body;
  try {
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const makeCouncil = await council.create({
      name,
      councilImage:
        result?.secure_url ||
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      content,
    });
    return res.status(200).json({
      statusbar: "Success",
      message: "Council Created Well",
      data: makeCouncil,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Create Council",
      error: error.message,
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const fetchAll = await council.find();
    return res.status(200).json({
      statusbar: "Sucess",
      message: "All Council Fetched Well",
      data: fetchAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Cant Get All Council",
      error: error.message,
    });
  }
};

export const getOne = async (req, res) => {
  try {
    let { id } = req.params;
    const getOne = await council.findById(id);
    if (!getOne) {
      return res.status(404).json({
        message: "Id Not Found",
      });
    }
    return res.status(200).json({
      statusbar: "Success",
      message: "All Council Retrieved All",
      data: getOne,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Cant get One Council",
      error: error.message,
    });
  }
};

export const delteCouncil = async (req, res) => {
  try {
    const { id } = req.params;
    const delte = await council.findByIdAndDelete(id);
    if (!delte) {
      return res.status(404).json({
        message: "Id Not Found",
      });
    }
    return res.status(200).json({
      statusbar: "Success",
      message: "One Council Deleted Wel",
      data: delte,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Cant Delete Council",
      error: error.message,
    });
  }
};

export const UpdateeCouncil = async (req, res) => {
  let { name, councilImage, content } = req.body;
  const { id } = req.params;
  try {
    const getId = await council.findById(id);
    if (!getId) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const updatedData = await council.findByIdAndUpdate(id, {
      name,
      councilImage:
        result?.secure_url ||
        "https://res.cloudinary.com/dskrteajn/image/upload/v1687193757/tvvqxgdcejevmlmgisup.webp",
      content,
    });
    return res.status(200).json({
      statusbar: "Success",
      message: "Council updated Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't update Council",
      error: error.message,
    });
  }
};
