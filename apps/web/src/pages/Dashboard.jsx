import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Dashboard() {
     const navigate = useNavigate();

  const resumeId =
    localStorage.getItem("resumeId");

  const analyzeResume = async () => {
    try {

      const response =
        await api.post(
          `/analysis/${resumeId}`
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
