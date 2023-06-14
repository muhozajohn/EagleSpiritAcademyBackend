import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import applyRoutes from "./routes/applyRoutes";
import contactUsRoutes from "./routes/contactUsRoutes";

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
        // url: "https://madeinapi.onrender.com",
        url: "http://localhost:4200",
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

app.get("/", (req, res) => {
  res.status(200).json({
    author: "Muhoza John",
    message: "Welcome to the Eagle Spirit Academy API",
  });
});

export default app;
