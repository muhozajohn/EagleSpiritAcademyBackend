import express from "express";

import {
  createAfter,
  readAfter,
  updateAfter,
} from "../../controllers/Admission/afterApplyController";
import fileUpload from "../../helper/multer";

const AfterRoutes = express.Router();

AfterRoutes.post("/createAfter", fileUpload.single("files"), createAfter);
AfterRoutes.put("/updateAfter/:id", updateAfter);
AfterRoutes.get("/readMessage", readAfter);

export default AfterRoutes;
