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
    target:"https://resume-service-dfbrf0gna6fkeyfq.indiasouthcentral-01.azurewebsites.net",
    changeOrigin: true,
  })
);

app.use(
  "/api/analysis",
  createProxyMiddleware({
    target:"https://analysis-service-c5gkheb6c9d9h6ga.indiasouthcentral-01.azurewebsites.net",
    changeOrigin: true,
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
