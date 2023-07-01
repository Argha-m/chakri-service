const express = require("express");
const router = express.Router();
const { validateApiKey } = require("../middleware/index");

router.get("/:count?", validateApiKey, (req, res) => {
  const jobListController =
    require("../controller/web/index").jobListController;
  const jobListModel = require("../models/index").jobModel;
  jobListController.jobs(req, res, jobListModel);
});

module.exports = router;
