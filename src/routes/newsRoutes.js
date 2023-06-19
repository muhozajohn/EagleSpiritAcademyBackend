import express from "express";
import fileUpload from "../helper/multer";

import Authorization from "../middleware/Autho";
import {
  Createnews,
  Updateenews,
  deletenews,
  getAllnews,
  getOnenews,
} from "../controllers/NewsController";

const NewsRoutes = express.Router();

NewsRoutes.post(
  "/createNews",
  Authorization,
  fileUpload.single("newsImage"),
  Createnews
);
NewsRoutes.get("/readNews", getAllnews);
NewsRoutes.get("/readOneNews/:id", getOnenews);
NewsRoutes.delete("/deleteNews/:id", deletenews);
NewsRoutes.put(
  "/updateNews/:id",
  Authorization,
  fileUpload.single("newsImage"),
  Updateenews
);

export default NewsRoutes;
