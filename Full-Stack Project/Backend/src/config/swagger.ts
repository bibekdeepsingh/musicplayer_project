import type { Express, RequestHandler } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Music Player Organizer",
      version: "1.0.0",
      description: "API docs",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
  },
  apis: ["./src/routes/**/*.ts", "./src/controllers/**/*.ts"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

const setupSwagger = (app: Express): void => {
  app.use(
    "/api-docs",
    ...(swaggerUi.serve as unknown as RequestHandler[]),
  );

  app.get("/api-docs.json", (_req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
};

export default setupSwagger;
