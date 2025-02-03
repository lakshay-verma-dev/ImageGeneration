import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js"; // Import database connection

dotenv.config();

const app = express();

connectDB();

// Middleware
app.use(express.json());
app.use(cors()); 
app.use(helmet()); 
app.use(morgan("dev")); 

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the API 🚀");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

export default app;
