import axios from "axios";

export default axios.create({
  baseURL: "https://resume-analyzer-api-gateway.onrender.com/api",
});
