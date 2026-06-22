import { useEffect, useState } from "react";
import axios from "axios";

function AnalysisPage() {
  const [analysis, setAnalysis] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchAnalysis();
  }, []);

  const fetchAnalysis = async () => {
    try {
      const resumeId =
        localStorage.getItem("resumeId");

      const response =
        await axios.get(
          `http://localhost:5003/api/analysis/${resumeId}`
        );

      setAnalysis(response.data);
    } catch (error) {
      console.error(
        "Error fetching analysis:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!analysis) {
    return (
      <h2>
        No analysis found
      </h2>
    );
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>
        Resume Analysis
      </h1>

      <hr />

      <h2>
        ATS Score:
        {" "}
        {analysis.atsScore}
        /100
      </h2>

      <hr />

      <h3>Skills</h3>

      <ul>
        {analysis.skills?.map(
          (skill) => (
            <li key={skill}>
              ✅ {skill}
            </li>
          )
        )}
      </ul>

      <hr />

      <h3>
        Missing Keywords
      </h3>

      <ul>
        {analysis.missingKeywords?.map(
          (keyword) => (
            <li key={keyword}>
              ❌ {keyword}
            </li>
          )
        )}
      </ul>

      <hr />

      <h3>Suggestions</h3>

      <ul>
        {analysis.suggestions?.map(
          (suggestion, index) => (
            <li key={index}>
              💡 {suggestion}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default AnalysisPage;