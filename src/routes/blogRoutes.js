import express from "express";
import fileUpload from "../helper/multer";
import {
  CreateBlog,
  getAllBlog,
  getOneBlog,
  deleteBlog,
  UpdateeBlog,
} from "../controllers/blogController";

const blogRoutes = express.Router();

blogRoutes.post("/createBlog", fileUpload.single("blogImage"), CreateBlog);
blogRoutes.get("/readBlog", getAllBlog);
blogRoutes.get("/readOneBlog/:id", getOneBlog);
blogRoutes.delete("/deleteBlog/:id", deleteBlog);
blogRoutes.put("/updateBlog/:id", fileUpload.single("blogImage"), UpdateeBlog);

export default blogRoutes;
