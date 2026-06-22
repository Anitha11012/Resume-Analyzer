const axios = require("axios");

const Analysis = require("../models/Analysis");

const analyzeResumeWithAI =
  require("../services/aiAnalyzer");

const analyzeResume = async (
  req,
  res
) => {
  try {
    const { resumeId } = req.params;

    // Check if analysis already exists
    const existingAnalysis =
      await Analysis.findOne({
        resumeId,
      });

    if (existingAnalysis) {
      return res.json({
        success: true,
        analysis: existingAnalysis,
      });
    }

    // Fetch resume
    const response =
      await axios.get(
        `http://localhost:5002/api/resume/${resumeId}`
      );

    const resume =
      response.data;

    // Analyze text
    const result =
      await analyzeResumeWithAI(
        resume.extractedText || ""
      );

    // Save analysis
    const analysis =
      await Analysis.create({
        resumeId,
        ...result,
      });

    res.status(201).json({
      success: true,
      analysis,
    });

  } catch (error) {
    console.error(
      "ANALYSIS ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAnalysis = async (
  req,
  res
) => {
  try {
    const analysis =
      await Analysis.findOne({
        resumeId:
          req.params.resumeId,
      });

    if (!analysis) {
      return res.status(404).json({
        success: false,
        message:
          "Analysis not found",
      });
    }

    res.json(analysis);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const matchResume = async (
  req,
  res
) => {
  try {
    const { resumeId } =
      req.params;

    const {
      jobDescription,
    } = req.body;

    const response =
      await axios.get(
        `http://localhost:5002/api/resume/${resumeId}`
      );

    const resume =
      response.data;

    const resumeText =
      (
        resume.extractedText || ""
      ).toLowerCase();

    const jd =
      (
        jobDescription || ""
      ).toLowerCase();

    const keywords = [
      "react",
      "node",
      "mongodb",
      "docker",
      "redis",
      "aws",
      "typescript",
      "express",
      "jwt",
    ];

    const matchedSkills =
      [];

    const missingSkills =
      [];

    keywords.forEach(
      (skill) => {
        if (
          resumeText.includes(
            skill
          ) &&
          jd.includes(skill)
        ) {
          matchedSkills.push(
            skill
          );
        } else if (
          jd.includes(skill)
        ) {
          missingSkills.push(
            skill
          );
        }
      }
    );

    const totalSkills =
      matchedSkills.length +
      missingSkills.length;

    const matchScore =
      totalSkills === 0
        ? 0
        : Math.round(
            (
              matchedSkills.length /
              totalSkills
            ) *
              100
          );

    res.json({
      matchScore,
      matchedSkills,
      missingSkills,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error.message,
    });
  }
};

module.exports = {
  analyzeResume,
  getAnalysis,
  matchResume,
};