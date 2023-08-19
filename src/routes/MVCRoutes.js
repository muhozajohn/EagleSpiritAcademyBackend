import express from "express";

import {
  createMVC,
  getMVC,
  updateMVC,
} from "../controllers/mvcController";

const MvcRoutes = express.Router();

MvcRoutes.post("/createMVC", createMVC);
MvcRoutes.put("/updateMVC/:id", updateMVC);
MvcRoutes.get("/getMVC", getMVC);

export default MvcRoutes;
