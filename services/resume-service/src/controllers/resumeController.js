const fs = require("fs");
const pdf = require("pdf-parse");

const Resume = require("../models/Resume");

const uploadResume = async (req, res) => {
  try {
    const dataBuffer = fs.readFileSync(req.file.path);

    const pdfData = await pdf(dataBuffer);

    const resume = await Resume.create({
        userId: req.body.userId,
        fileName: req.file.filename,
        filePath: req.file.path,
        extractedText: pdfData.text,
      });

    res.status(201).json({
      success: true,
      resume,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getResume = async (req, res) => {

try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    res.json(resume);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  uploadResume,getResume,
};