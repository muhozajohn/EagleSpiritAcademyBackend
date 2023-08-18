import express from "express";

import {
  createLife,
  getLife,
  updateLife,
} from "../../controllers/about/lifeController";

const lifeRoutes = express.Router();

lifeRoutes.post("/createLife", createLife);
lifeRoutes.put("/updateLife/:id", updateLife);
lifeRoutes.get("/getLife", getLife);

export default lifeRoutes;
