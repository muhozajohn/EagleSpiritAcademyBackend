import express from "express";
import {
  createFacility,
  deletetFac,
  readfacility,
  readone,
  updateFacility,
} from "../controllers/facilityController";
import fileUpload from "../helper/multer";
const facilityRoutes = express.Router();

facilityRoutes.post("/create", fileUpload.single("facImage"), createFacility);
facilityRoutes.get("/read", readfacility);
facilityRoutes.get("/readOne/:id", readone);
facilityRoutes.get("/delete/:id", deletetFac);
facilityRoutes.put("/update/:id",fileUpload.single("facImage"), updateFacility);

export default facilityRoutes;
