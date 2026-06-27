const express = require("express");
const cors = require("cors");

const {
  createProxyMiddleware,
} = require("http-proxy-middleware");

const app = express();

app.use(cors());

app.use(
  "/api/resume",
  createProxyMiddleware({
    target:"https://resume-analyzer-resume-service.onrender.com",
    changeOrigin: true,
  })
);

app.use(
  "/api/analysis",
  createProxyMiddleware({
    target:"https://resume-analyzer-2-g0je.onrender.com",
    changeOrigin: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    "API Gateway running on 5000"
  );
});

app.get("/health", (req, res) => {
  res.json({
    status: "gateway-ok",
  });
});
