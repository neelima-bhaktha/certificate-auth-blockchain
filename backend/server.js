const { init } = require("./config/blockchain");
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const certificateRoutes = require("./routes/certificateRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/certificates", certificateRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;

init();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});