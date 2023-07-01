const express = require("express");
const router = express.Router();
const { validateApiKey } = require("../middleware/index");

router.post("/", validateApiKey, (req, res) => {
  const adminAuthController =
    require("../controller/portal/index").authController;
  const userPortalAuthModel = require("../models/index").userModel;
  adminAuthController.login(req, res, userPortalAuthModel);
});

module.exports = router;
