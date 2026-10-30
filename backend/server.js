import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import connectDB, { isDBConnected } from "./config/db.js";

dotenv.config();

// Guard against unhandled rejections/exceptions crashing the process silently.
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled promise rejection:", reason?.message || reason);
});
process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error.message);
  process.exit(1);
});

const app = express();

// Connect to MongoDB in the background so the server can start and return
// meaningful JSON errors (503) instead of crashing or returning empty 502s.
connectDB();

// Rate limiting for auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { success: false, message: "Too many requests, please try again later" },
});

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/contact", contactRoutes);

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running",
    database: isDBConnected() ? "connected" : "connecting",
  });
});

// 404 handler for unknown API routes — always return JSON, never empty.
app.use("/api/*", (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

// Centralized error-handling middleware.
app.use((err, req, res, next) => {
  if (err instanceof Error) {
    console.error("Express error:", err.message);
    return res.status(err.status || 500).json({
      success: false,
      message: process.env.NODE_ENV === "production"
        ? "Internal server error."
        : err.message,
    });
  }
  next();
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Keep the process alive even if MongoDB is unreachable.
server.on("error", (error) => {
  console.error("Server error:", error.message);
});