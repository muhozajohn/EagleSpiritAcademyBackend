import express from "express";
import fileUpload from "../helper/multer";
import {
  createAdmission,
  deleteAdmision,
  getAll,
  getSingle,
  updateAdmision,
} from "../controllers/admissionController";
const adimisionRoutes = express.Router();
adimisionRoutes.post("/create", fileUpload.single("file"), createAdmission);
adimisionRoutes.get("/read", getAll);
adimisionRoutes.get("/readOne/:id", getSingle);
adimisionRoutes.put("/update/:id", fileUpload.single("file"), updateAdmision);
adimisionRoutes.delete("/delete/:id", deleteAdmision);

export default adimisionRoutes;
