const mongoose = require("mongoose");
require('dotenv').config();
const mongoURL = process.env.MONGO_URI;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connection successful");
});

connection.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});

module.exports = mongoose;
