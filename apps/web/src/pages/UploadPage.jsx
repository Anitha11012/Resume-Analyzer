import { useState } from "react";
import axios from "axios";
import {
  useNavigate,
} from "react-router-dom";

function UploadPage() {
  const [file, setFile] = useState(null);
const navigate =
  useNavigate();

  const handleUpload = async () => {
  try {
    if (!file) {
      alert("Please select a PDF");
      return;
    }

    const formData = new FormData();

    formData.append("resume", file);
    formData.append("userId", "demo");

    const response = await axios.post(
      "https://resume-analyzer-api-gateway.onrender.com/api/resume/upload",
      formData
    );

    const resumeId = response.data.resume._id;

    localStorage.setItem(
      "resumeId",
      resumeId
    );
    navigate("/dashboard");

    console.log("Resume ID:", resumeId);

  } catch (error) {
    console.error(error);
  }
};

  return (
    <div>
      <h1>Resume Analyzer</h1>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      <button onClick={handleUpload}>
        Upload Resume
      </button>
    </div>
  );
}

export default UploadPage;
