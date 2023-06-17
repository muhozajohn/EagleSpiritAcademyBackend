import express from "express";
import fileUpload from "../helper/multer";
import {
  CreateBlog,
  getAllBlog,
  getOneBlog,
  deleteBlog,
  UpdateeBlog,
} from "../controllers/blogController";
import Authorization from "../middleware/Autho";

const blogRoutes = express.Router();

blogRoutes.post("/createBlog", Authorization, fileUpload.single("blogImage"), CreateBlog);
blogRoutes.get("/readBlog", getAllBlog);
blogRoutes.get("/readOneBlog/:id", getOneBlog);
blogRoutes.delete("/deleteBlog/:id", deleteBlog);
blogRoutes.put("/updateBlog/:id",Authorization, fileUpload.single("blogImage"), UpdateeBlog);

export default blogRoutes;
