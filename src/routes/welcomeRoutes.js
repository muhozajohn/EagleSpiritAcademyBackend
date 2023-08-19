import express from "express";

import { createWelcome, getWelcome, updateWelcome } from "../controllers/welcomeController";

const welcomeRoutes = express.Router();

welcomeRoutes.post("/createWelcome", createWelcome);
welcomeRoutes.put("/updateWelcome/:id", updateWelcome);
welcomeRoutes.get("/getWelcome", getWelcome);

export default welcomeRoutes;