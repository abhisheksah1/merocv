// Import necessary modules
import dotenv from "dotenv"; // Load environment variables from a .env file into process.env
dotenv.config();

import express from "express"; // Import Express web framework
import databaseConnection from "./database/databaseConn.js"; // Import database connection function
import cors from "cors"; // Import CORS middleware for enabling Cross-Origin Resource Sharing

//  Import user routes
import registerRoutes from "./routes/user.routes.js";
import cvRoutes from "./controllers/cv.controllers.js";
import contactRoutes from "./routes/contact.routes.js";
import subscribeRoute from "./routes/sunscribe.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import feedbackRoutes from "./controllers/feedback.controllers.js";
import adminRoutess from "./routes/adminUser.routes.js";
import path from "path";

const app = express(); // Create an Express application
const PORT = process.env.PORT || 5000; // Set the port from environment variables or default to 5000

databaseConnection(); // Connect to the database

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware to enable CORS
app.use(cors());
const __dirname = path.resolve();

// Register user routes
app.use("/api/user", registerRoutes);
app.use("/api/cv", cvRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/subscribe", subscribeRoute);
app.use("/api/admin", adminRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/adminUser", adminRoutess);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
