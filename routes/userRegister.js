const express = require("express");
const router = express.Router();
const { validateApiKey } = require("../middleware/index");

router.post("/", validateApiKey, (req, res) => {
  const userRegisterController =
    require("../controller/portal/index").userRegisterController;
  const userRegisterModel = require("../models/index").userModel;
  userRegisterController.addUser(req, res, userRegisterModel);
});

module.exports = router;
