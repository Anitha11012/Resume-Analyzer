const express = require("express");
const cors = require("cors");

const {
  createProxyMiddleware,
} = require("http-proxy-middleware");

const app = express();

app.use(cors());

const RESUME_SERVICE_URL = process.env.RESUME_SERVICE_URL;
const ANALYSIS_SERVICE_URL = process.env.ANALYSIS_SERVICE_URL;

app.use(
  "/api/resume",
  createProxyMiddleware({
    target:RESUME_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: (path, req) => {
      console.log("[Gateway] Proxy path:", path);

      return "/api/resume" + path;
    },
  })
);

app.use(
  "/api/analysis",
  createProxyMiddleware({
    target:ANALYSIS_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: (path, req) => {
      console.log("[Gateway] Proxy path:", path);

      return "/api/analysis" + path;
    },
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `API Gateway running on ${PORT}`
  );
});

app.get("/health", (req, res) => {
  res.json({
    status: "gateway-ok",
  });
});
