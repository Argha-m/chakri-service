module.exports = function (req, res, next) {
  res.badRequest = function (err) {
    if (err.name && err.name == "ValidationError" && err.errors) {
      var response = {
        status: 400,
        message: "Validation Error",
        validationErrors: err.errors,
      };
      return res.status(400).send(response);
    }
    var response = {
      status: 400,
      message: err,
    };
    return res.status(400).send(response);
  };
  next();
};
