import express from "express";
import fileUpload from "../helper/multer";
import {
  createImage,
  updateGallery,
  getAllAlbum,
  getOneImage,
  deleteImage,
} from "../controllers/galleryController";

const galleryRoutes = express.Router();

galleryRoutes.post("/create", fileUpload.single("Gallery"), createImage);
galleryRoutes.get("/getAll", getAllAlbum);
galleryRoutes.get("/getOne/:id", getOneImage);
galleryRoutes.put("/update/:id", fileUpload.single("Gallery"), updateGallery);
galleryRoutes.delete("/delete/:id", deleteImage);

export default galleryRoutes;
