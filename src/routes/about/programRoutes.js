import express from "express";

import {
  createProgram,
  getProgram,
  updateProgram,
} from "../../controllers/about/ProgramController"

const programRoutes = express.Router();

programRoutes.post("/createProgram", createProgram);
programRoutes.put("/updateProgram/:id", updateProgram);
programRoutes.get("/getProgram", getProgram);

export default programRoutes;
