import express from "express";

import {
  createHowToApply,
  readHowToApply,
  updateHowToApply,
} from "../../controllers/Admission/howToApplyController";
import fileUpload from "../../helper/multer";

const howToApplyRoutes = express.Router();

howToApplyRoutes.post("/createHowToApply", fileUpload.single("files"), createHowToApply);
howToApplyRoutes.put("/updateHowToApply/:id", updateHowToApply);
howToApplyRoutes.get("/readHowToApply", readHowToApply);

export default howToApplyRoutes;
