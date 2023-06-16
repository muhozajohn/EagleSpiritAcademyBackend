import express from "express";
import fileUpload from "../helper/multer";
import { createUser, getAllUsers, login } from "../controllers/UserController";

const userRoutes = express.Router();

userRoutes.post("/create", fileUpload.single("userProfile"), createUser);
userRoutes.post("/login", fileUpload.single("userProfile"), login);
userRoutes.get("/read", getAllUsers);

export default userRoutes;
