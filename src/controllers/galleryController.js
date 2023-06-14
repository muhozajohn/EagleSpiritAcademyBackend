import { uploadToCloud } from "../helper/cloud";
import gallery from "../models/galleryModels";

// createImage

export const createImage = async (req, res) => {
  let { Gallery } = req.body;
  try {
    const result = await uploadToCloud(req.file, res);
    const makeAlbum = await gallery.create({
      Gallery: result?.secure_url || profile.jpg,
    });
    return;
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Upload Gallery Image",
    });
  }
};
