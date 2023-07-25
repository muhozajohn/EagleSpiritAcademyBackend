import express from "express";
import {
  createFaculty,
  deletetFac,
  readfacility,
  readone,
  updateFaculty,
} from "../controllers/FacultyController";
import fileUpload from "../helper/multer";
const facultyRoutes = express.Router();

facultyRoutes.post("/create", fileUpload.single("facImage"), createFaculty);
facultyRoutes.get("/read", readfacility);
facultyRoutes.get("/readOne/:id", readone);
facultyRoutes.get("/delete/:id", deletetFac);
facultyRoutes.put("/update/:id", fileUpload.single("facImage"), updateFaculty);

export default facultyRoutes;
