import express from "express";
import cors from "cors";
import logger from "./middleware/logger.js";
import courseRoutes from "./routes/courseRoutes.js";
import instructorRoutes from "./routes/instructorRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Bind logging middleware
app.use(logger);

// Base route bindings
app.use("/api/courses", courseRoutes);
app.use("/api/instructors", instructorRoutes);

// Root API confirmation endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the EduPortal REST API Backend",
    endpoints: {
      root: "/",
      courses: "/api/courses",
      courseDetails: "/api/courses/:slug",
      instructors: "/api/instructors",
      instructorDetails: "/api/instructors/:name"
    }
  });
});

// Custom 404 response for unknown routes
app.use((req, res) => {
  res.status(404).json({
    error: "Resource not found",
    message: "The requested route does not exist. Visit the base endpoint '/' to view list of available routes."
  });
});

// Start listening
app.listen(PORT, () => {
  console.log(`EduPortal Express server running on http://localhost:${PORT}`);
});
