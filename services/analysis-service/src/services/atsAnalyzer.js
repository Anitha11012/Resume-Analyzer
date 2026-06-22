const analyzeText = (text) => {
  const resumeText =
    text.toLowerCase();

  const skills = [];

  if (
    resumeText.includes("react")
  ) {
    skills.push("React");
  }

  if (
    resumeText.includes("node")
  ) {
    skills.push("Node.js");
  }

  if (
    resumeText.includes("mongodb") ||
    resumeText.includes("mongo")
  ) {
    skills.push("MongoDB");
  }

  if (
    resumeText.includes("express")
  ) {
    skills.push("Express.js");
  }

  if (
    resumeText.includes("javascript")
  ) {
    skills.push("JavaScript");
  }

  const atsScore = Math.min(
    skills.length * 15,
    100
  );

  return {
    atsScore,
    skills,
    missingKeywords: [
      "Docker",
      "Redis",
      "AWS",
    ].filter(
      (skill) =>
        !resumeText.includes(
          skill.toLowerCase()
        )
    ),

    suggestions: [
      "Add measurable achievements",
      "Include cloud technologies",
      "Mention deployment experience",
    ],
  };
};

module.exports = analyzeText;