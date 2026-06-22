const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    userId: String,

    fileName: String,

    filePath: String,

    extractedText: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Resume",
  resumeSchema
);