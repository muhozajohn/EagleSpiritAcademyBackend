import express from "express";

import {
  readBefore,
  updateBefore,
} from "../controllers/Admission/beforeApplyController";

const beforeRoutes = express.Router();

beforeRoutes.put("/updateBefore", updateBefore);
beforeRoutes.get("/readMessage", readBefore);

export default beforeRoutes;
