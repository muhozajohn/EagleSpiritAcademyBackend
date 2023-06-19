import express from "express";
import fileUpload from "../helper/multer";

import Authorization from "../middleware/Autho";
import {
  CreateEvent,
  UpdateeEvent,
  deleteEvents,
  getAllEvent,
  getOneEvents,
} from "../controllers/eventsControllers";

const eventRoutes = express.Router();

eventRoutes.post(
  "/createEvent",
  Authorization,
  fileUpload.single("eventImage"),
  CreateEvent
);
eventRoutes.get("/readEvent", getAllEvent);
eventRoutes.get("/readOneEvent/:id", getOneEvents);
eventRoutes.delete("/deleteEvent/:id", deleteEvents);
eventRoutes.put(
  "/updateEvent/:id",
  Authorization,
  fileUpload.single("eventImage"),
  UpdateeEvent
);

export default eventRoutes;
