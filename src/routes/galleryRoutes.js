import express from "express";
import fileUpload from "../helper/multer";
import { createImage } from "../controllers/galleryController";

const galleryRoutes = express.Router();

galleryRoutes.post("/create", fileUpload.single("Gallery"), createImage);

export default galleryRoutes;
