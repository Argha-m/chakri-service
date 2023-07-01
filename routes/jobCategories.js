const express = require("express");
const router = express.Router();
const { validateApiKey } = require("../middleware/index");

router.get("/:count?", validateApiKey, (req, res) => {
  const jobCategoryController =
    require("../controller/web/index").jobCategoryController;
  const jobCategoryModel = require("../models/index").jobModel;
  jobCategoryController.categories(req, res, jobCategoryModel);
});

module.exports = router;
