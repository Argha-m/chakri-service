const { apiKey } = require("../../config/constant");

function isValidAPIKey(req, res, next) {
  let source = req.headers["source"];
  if (source === "swagger") {
    next();
  } else {
    let APIkey = req.headers["apikey"];
    if (APIkey === apiKey) {
      next();
    } else {
      res.forbidden();
    }
  }
}

module.exports = isValidAPIKey;
