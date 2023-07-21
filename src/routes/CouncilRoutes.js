import express from "express";
import fileUpload from "../helper/multer";
import Authorization from "../middleware/Autho";

import {
  UpdateeCouncil,
  createCouncil,
  delteCouncil,
  getAll,
  getOne,
} from "../controllers/CouncilControllers";

const CouncilRoutes = express.Router();

CouncilRoutes.post(
  "/create",
  Authorization,
  fileUpload.single("councilImage"),
  createCouncil
);
CouncilRoutes.get("/read", getAll);
CouncilRoutes.get("/readOne/:id", getOne);
CouncilRoutes.delete("/delete/:id", delteCouncil);
CouncilRoutes.put(
  "/update/:id",
  Authorization,
  fileUpload.single("councilImage"),
  UpdateeCouncil
);
export default CouncilRoutes;
