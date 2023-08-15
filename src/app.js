import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";


import applyRoutes from "./routes/applyRoutes";
import contactUsRoutes from "./routes/contactUsRoutes";
import blogRoutes from "./routes/blogRoutes";
import galleryRoutes from "./routes/galleryRoutes";
import userRoutes from "./routes/userRoutes";
import eventRoutes from "./routes/eventsRoutes";
import NewsRoutes from "./routes/newsRoutes";
import CouncilRoutes from "./routes/CouncilRoutes";
import adimisionRoutes from "./routes/admissionRoutes";
import facilityRoutes from "./routes/facilityRoutes";
import facultyRoutes from "./routes/FacultyRoutes";
import StudentRoutes from "./routes/StudentRoutes";
import beforeRoutes from "./routes/admission/beforeRoutes";
import howToApplyRoutes from "./routes/admission/howToApplyRoutes";
import afterRoutes from "./routes/admission/afterRoutes";

const app = express();
dotenv.config();

// swager configuration

const options = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      title: "Eagle Spirit Academy Documentation",
      version: "1.0.0",
      description: "Welcome to the Eagle Spirit Academy API",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          name: "Authorization",
          in: "header",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: "https://eaglespiritacademy.onrender.com",
      },
    ],
  },
  apis: ["./src/docs/*.js"],
};

const specs = swaggerJSDoc(options);

// configuration

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use("/api/EagleSpritAcademy/application", applyRoutes);
app.use("/api/EagleSpritAcademy/contactus", contactUsRoutes);
app.use("/api/EagleSpritAcademy/blog", blogRoutes);
app.use("/api/EagleSpritAcademy/gallery", galleryRoutes);
app.use("/api/EagleSpritAcademy/users", userRoutes);
app.use("/api/EagleSpritAcademy/events", eventRoutes);
app.use("/api/EagleSpritAcademy/news", NewsRoutes);
app.use("/api/EagleSpritAcademy/council", CouncilRoutes);
app.use("/api/EagleSpritAcademy/admision", adimisionRoutes);
app.use("/api/EagleSpritAcademy/facility", facilityRoutes);
app.use("/api/EagleSpritAcademy/faculty", facultyRoutes);
app.use("/api/EagleSpritAcademy/Student", StudentRoutes);
app.use("/api/EagleSpritAcademy/admission/before", beforeRoutes);
app.use("/api/EagleSpritAcademy/admission/howToApply", howToApplyRoutes);
app.use("/api/EagleSpritAcademy/admission/after", afterRoutes);


app.get("/", (req, res) => {
  res.status(200).json({
    author: "Muhoza John",
    message: "Welcome to the Eagle Spirit Academy API",
  });
});

export default app;
