import express from "express";

import {
  createParent,
  getParent,
  updateParent,
} from "../../controllers/about/parentController";

const parentRoutes = express.Router();

parentRoutes.post("/createParent", createParent);
parentRoutes.put("/updateParent/:id", updateParent);
parentRoutes.get("/getParent", getParent);

export default parentRoutes;
