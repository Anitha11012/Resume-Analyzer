const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema(
  {
    resumeId: String,

    atsScore: Number,

    skills: [String],

    missingKeywords: [String],

    suggestions: [String],
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.model(
    "Analysis",
    analysisSchema
  );