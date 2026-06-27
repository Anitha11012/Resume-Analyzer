import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
     const navigate = useNavigate();

  const resumeId =
    localStorage.getItem("resumeId");

  const analyzeResume = async () => {
    try {

      const response =
        await axios.post(
          `https://resume-analyzer-2-g0je.onrender.com/api/analysis/${resumeId}`
        );
        localStorage.setItem(
  "analysisId",
  response.data.analysis._id
);
navigate("/analysis");
      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <p>
        Resume ID:
        {resumeId}
      </p>

      <button
        onClick={analyzeResume}
      >
        Analyze Resume
      </button>
    </div>
  );
}

export default Dashboard;
