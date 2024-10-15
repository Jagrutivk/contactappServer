const express = require("express");
const cors = require("cors");
const contactRoutes = require("../src/routes/contactRoutes");

const app = express();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3001", // Allow only this origin
    methods: ["GET", "POST", "OPTIONS"], // Allow these methods
  })
);

// Routes
app.use("/api", contactRoutes);

module.exports = app;
