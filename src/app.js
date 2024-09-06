const express = require("express");
const cors = require("cors");
const contactRoutes = require("../src/routes/contactRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", contactRoutes);

module.exports = app;
