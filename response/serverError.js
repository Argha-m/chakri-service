module.exports = function (req, res, next) {
  res.serverError = function (err) {
    var response = {
      status: 500,
      message: "Server Error",
      error: err,
    };
    return res.status(500).send(response);
  };
  next();
};
