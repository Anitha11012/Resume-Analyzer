require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const analysisRoutes =
  require("./routes/analysisRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/analysis", analysisRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(
    `Analysis Service running on ${process.env.PORT}`
  );
});