import express from "express";

import {
  createBefore,
  readBefore,
  updateBefore,
} from "../../controllers/Admission/beforeApplyController";
import fileUpload from "../../helper/multer";

const beforeRoutes = express.Router();

beforeRoutes.post("/createBefore", fileUpload.single("files"), createBefore);
beforeRoutes.put("/updateBefore/:id", updateBefore);
beforeRoutes.get("/readMessage", readBefore);

export default beforeRoutes;
