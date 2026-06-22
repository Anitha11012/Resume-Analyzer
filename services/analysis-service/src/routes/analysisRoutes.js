const router =
  require("express").Router();

const {
  analyzeResume,getAnalysis,matchResume
} = require(
  "../controllers/analysisController"
);

router.post(
  "/:resumeId",
  analyzeResume
);

router.get(
  "/:resumeId",
  getAnalysis
);

router.post(
  "/match/:resumeId",
  matchResume
);

module.exports = router;