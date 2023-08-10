import express from "express";
import {
  createApplication,
  getAllAplicant,
  getApplicantByID,
  updateApplicant,
  DeleteApplicant,
  updateApplicationStatus,
} from "../controllers/applyController";
import fileUpload from "../helper/multer";

const applyRoutes = express.Router();

applyRoutes.post("/apply", fileUpload.single("stProfile"), createApplication);
applyRoutes.get("/getAll", getAllAplicant);
applyRoutes.get("/getOne/:id", getApplicantByID);
applyRoutes.put("/update/:id", fileUpload.single("stProfile"), updateApplicant);
applyRoutes.delete("/delete/:id", DeleteApplicant);
applyRoutes.put("/status/:id", updateApplicationStatus);

export default applyRoutes;
