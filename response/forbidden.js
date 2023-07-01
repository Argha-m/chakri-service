module.exports = function (req, res, next) {
  res.forbidden = function (messsage) {
    var response = {
      status: 403,
      message: messsage ? messsage : "Unauthorized Access",
    };
    return res.status(403).send(response);
  };
  next();
};
