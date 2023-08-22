import express from "express";
import fileUpload from "../helper/multer";
import {
  createUser,
  deleteUsers,
  getAllUsers,
  getSingle,
  login,
  updateUsers,
} from "../controllers/UserController";

const userRoutes = express.Router();

userRoutes.post("/create", fileUpload.single("userProfile"), createUser);
userRoutes.put("/update/:id", fileUpload.single("userProfile"), updateUsers);
userRoutes.post("/login", fileUpload.single("userProfile"), login);
userRoutes.get("/read", getAllUsers);
userRoutes.get("/read/:id", getSingle);
userRoutes.delete("/delete/:id", deleteUsers);

export default userRoutes;
