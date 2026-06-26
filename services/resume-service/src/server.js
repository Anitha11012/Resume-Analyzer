require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const resumeRoutes =require("./routes/resumeRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/resume", resumeRoutes);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo Connected");
  });

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(
    "Resume Service Running on 5002"
  );
});
