import dotenv from "dotenv";
import app from "./app.js"; // Import the Express app

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

// Start the Express server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
