import express from "express";
import fileUpload from "../helper/multer";
import {
  createMessage,
  readMessage,
  readMessageBYId,
  updateMessage,
  deleteMessage,
  replyMessage,
} from "../controllers/contactusController";

const contactUsRoutes = express.Router();

contactUsRoutes.post("/sendMessage", fileUpload.single("file"), createMessage);
contactUsRoutes.put("/updateMessage/:id", fileUpload.single("file"),  updateMessage);
contactUsRoutes.put("/reply/:id", fileUpload.single("file"),  replyMessage);
contactUsRoutes.get("/readMessage", readMessage);
contactUsRoutes.get("/singleMessage/:id", readMessageBYId);
contactUsRoutes.delete("/deleteMessage/:id", deleteMessage);

export default contactUsRoutes;
