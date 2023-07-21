import { uploadToCloud } from "../helper/cloud";
import gallery from "../models/galleryModels";

// createImage

export const createImage = async (req, res) => {
  try {
    let { Gallery } = req.body;
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const makeAlbum = await gallery.create({
      Gallery:
        result?.secure_url || 
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    });
    return res.status(200).json({
      statusbar: "Success",
      message: "Image Uploaded Well",
      data: makeAlbum,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Upload Gallery Image",
      error: error.message,
    });
  }
};

// readAllUploadedImage

export const getAllAlbum = async (req, res) => {
  try {
    const getAll = await gallery.find();
    return res.status(200).json({
      statusbar: "Success",
      message: "all Album retrieved Well",
      data: getAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Upload Gallery Image",
      error: error.message,
    });
  }
};
// readAllUploadedImage

export const getOneImage = async (req, res) => {
  try {
    const { id } = req.params;
    const getAll = await gallery.findById(id);
    return res.status(200).json({
      statusbar: "Success",
      message: "all One retrieved Well",
      data: getAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Retrive Gallery Image",
      error: error.message,
    });
  }
};

// deleteImage
export const deleteImage = async (req, res) => {
  const { id } = req.params;

  try {
    const getId = await gallery.findById(id);
    if (!getId) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    const deleteImage = await gallery.findByIdAndDelete(id);
    return res.status(200).json({
      statusbar: "Success",
      message: "Image Delete Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Delte Gallery Image",
      error: error.message,
    });
  }
};

// updateGallery

export const updateGallery = async (req, res) => {
  const { id } = req.params;
  let { Gallery } = req.body;
  try {
    const getId = await gallery.findById(id);
    if (!getId) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id not Found",
      });
    }
    const result = await uploadToCloud(req.file, res);
    const updatedData = await gallery.findByIdAndUpdate(id, {
      Gallery: result?.secure_url || profile.jpg,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Update Gallery Image",
      error: error.message,
    });
  }
};
