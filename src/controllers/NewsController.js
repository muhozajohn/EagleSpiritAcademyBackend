import news from "../models/NewsModels";
import { uploadToCloud } from "../helper/cloud";
import users from "../models/userModels";

// create news
export const Createnews = async (req, res) => {
  let { title, newsImage, content, author } = req.body;
  console.log(req.users);
  try {
    const result = await uploadToCloud(req.file, res);
    const makenews = await news.create({
      title,
      newsImage: result?.secure_url || "profile.jpg",
      content,
      author: req.users.lastname,
    });
    return res.status(200).json({
      statusbar: "Success",
      message: "news Created Successfully",
      data: makenews,
    });
  } catch (erroe) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Create news",
      error: error.message,
    });
  }
};
// getAllcreatednews

export const getAllnews = async (req, res) => {
  try {
    const getAll = await news.find();
    return res.status(200).json({
      statusbar: "Success",
      message: "All news Retrieved Successfully",
      data: getAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Retrieve All news",
      error: error.message,
    });
  }
};
// getSingle news

export const getOnenews = async (req, res) => {
  try {
    const { id } = req.params;
    const getAll = await news.findById(id);
    if (!getAll) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    return res.status(200).json({
      statusbar: "Success",
      message: "Single news Retrieved Successfully",
      data: getAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Retrieve One news",
      error: error.message,
    });
  }
};

// Deletenews
export const deletenews = async (req, res) => {
  try {
    const { id } = req.params;
    const getAll = await news.findById(id);
    if (!getAll) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    await news.findByIdAndDelete(id);
    return res.status(200).json({
      statusbar: "Success",
      message: "Single news Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Delete One news",
      error: error.message,
    });
  }
};

// updatnews
export const Updateenews = async (req, res) => {
  let { title, newsImage, content, author } = req.body;
  const { id } = req.params;
  try {
    const getId = await news.findById(id);
    if (!getId) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    const result = await uploadToCloud(req.file, res);
    await news.findByIdAndUpdate(id, {
      title,
      newsImage: result?.secure_url || "profile.jpg",
      content,
      author,
    });
    return res.status(200).json({
      statusbar: "Success",
      message: "news updated Successfully",
    });
  } catch (erroe) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't update news",
      error: error.message,
    });
  }
};
