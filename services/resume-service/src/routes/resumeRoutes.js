const express = require("express");

const router = express.Router();

const upload =
  require("../middleware/upload");

const {
  uploadResume,getResume
} = require("../controllers/resumeController");

router.post(
  "/upload",
  upload.single("resume"),
  uploadResume
);

router.get(
  "/:id",
  getResume
);

router.get("/health", (req, res) => {
  res.json({ status: "resume-service-ok" });
});

module.exports = router;