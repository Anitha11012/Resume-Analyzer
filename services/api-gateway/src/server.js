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
    // target: "http://localhost:5002",
    target:"https://resume-analyzer-resume-service.onrender.com"
    changeOrigin: true,
    pathRewrite: {
      "^/api/resume": "/api/resume",
    },
  })
);

app.use(
  "/api/analysis",
  createProxyMiddleware({
    // target: "http://localhost:5003",
    target:"https://resume-analyzer-2-g0je.onrender.com"
    changeOrigin: true,
    pathRewrite: {
      "^/api/analysis": "/api/analysis",
    },

  })
);



app.listen(5000, () => {
  console.log(
    "API Gateway running on 5000"
  );
});

app.get("/health", (req, res) => {
  res.json({
    status: "gateway-ok",
  });
});
