import express from "express";
import {
  createStudent,
  deletetFac,
  readStudent,
  readone,
  updateStudent,
} from "../controllers/StudentController";
import fileUpload from "../helper/multer";
const StudentRoutes = express.Router();

StudentRoutes.post("/create", fileUpload.single("facImage"), createStudent);
StudentRoutes.get("/read", readStudent);
StudentRoutes.get("/readOne/:id", readone);
StudentRoutes.get("/delete/:id", deletetFac);
StudentRoutes.put("/update/:id", fileUpload.single("facImage"), updateStudent);

export default StudentRoutes;
