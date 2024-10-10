const app = require("./app");
const { connectDB, sequelize } = require("../src/config/database");
require("dotenv").config();

// Connect to the database
connectDB();

// Sync the models with the database
sequelize.sync({ alter: true }).then(() => {
  console.log("Database & tables synced");
});

// Start the server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
