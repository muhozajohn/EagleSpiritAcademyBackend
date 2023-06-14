import blog from "../models/blogModels";
import { uploadToCloud } from "../helper/cloud";

// create Blog
export const CreateBlog = async (req, res) => {
  let { title, blogImage, content, author, dateCreated } = req.body;
  try {
    const result = await uploadToCloud(req.file, res);
    const makeBlog = await blog.create({
      title,
      blogImage: result?.secure_url || "profile.jpg",
      content,
      author,
      dateCreated,
    });
    return res.status(200).json({
      statusbar: "Success",
      message: "Blog Created Successfully",
      data: makeBlog,
    });
  } catch (erroe) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Create Blog",
      error: error.message,
    });
  }
};
// getAllcreatedBlog

export const getAllBlog = async (req, res) => {
  try {
    const getAll = await blog.find();
    return res.status(200).json({
      statusbar: "Success",
      message: "All blogs Retrieved Successfully",
      data: getAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Retrieve All Blog",
      error: error.message,
    });
  }
};
// getSingle blog

export const getOneBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const getAll = await blog.findById(id);
    if (!getAll) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    return res.status(200).json({
      statusbar: "Success",
      message: "Single blog Retrieved Successfully",
      data: getAll,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Retrieve One Blog",
      error: error.message,
    });
  }
};

// DeleteBlog
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const getAll = await blog.findById(id);
    if (!getAll) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    await blog.findByIdAndDelete(id);
    return res.status(200).json({
      statusbar: "Success",
      message: "Single blog Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Delete One Blog",
      error: error.message,
    });
  }
};

// updatBlog
export const UpdateeBlog = async (req, res) => {
  let { title, blogImage, content, author, dateCreated } = req.body;
  const { id } = req.params;
  try {
    const getId = await blog.findById(id);
    if (!getId) {
      return res.status(404).json({
        statusbar: "Failed",
        message: "Id Not Found",
      });
    }
    const result = await uploadToCloud(req.file, res);
    await blog.findByIdAndUpdate(id, {
      title,
      blogImage: result?.secure_url || "profile.jpg",
      content,
      author,
      dateCreated,
    });
    return res.status(200).json({
      statusbar: "Success",
      message: "Blog updated Successfully",
    });
  } catch (erroe) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Can't Create Blog",
      error: error.message,
    });
  }
};
