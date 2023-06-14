import express from "express";
import fileUpload from "../helper/multer";
import {
  createMessage,
  readMessage,
  readMessageBYId,
  updateMessage,
  deleteMessage,
} from "../controllers/contactusController";

const contactUsRoutes = express.Router();

contactUsRoutes.post("/sendMessage", fileUpload.single("file"), createMessage);
contactUsRoutes.post("/updateMessage/:id", fileUpload.single("file"),  updateMessage);
contactUsRoutes.get("/readMessage", readMessage);
contactUsRoutes.get("/readMessageById/:id", readMessageBYId);
contactUsRoutes.get("/deleteMessage/:id", deleteMessage);

export default contactUsRoutes;
