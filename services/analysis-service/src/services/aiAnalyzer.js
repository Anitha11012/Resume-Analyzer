// const OpenAI = require("openai");

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const analyzeResumeWithAI = async (
//   resumeText,
//   jobDescription = ""
// ) => {
//   const prompt = `
// Analyze this resume.

// Resume:
// ${resumeText}

// Job Description:
// ${jobDescription}

// Return ONLY valid JSON:

// {
//   "atsScore": number,
//   "skills": [],
//   "missingKeywords": [],
//   "suggestions": []
// }
// `;

//   const response =
//     await client.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "user",
//           content: prompt,
//         },
//       ],
//       temperature: 0.3,
//     });

//   return JSON.parse(
//     response.choices[0].message.content
//   );
// };

// module.exports = analyzeResumeWithAI;

const analyzeText = require("./atsAnalyzer");

const analyzeResumeWithAI = async (
  resumeText
) => {
  return analyzeText(resumeText);
};

module.exports = analyzeResumeWithAI;