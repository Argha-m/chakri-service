module.exports = function (req, res, next) {
  res.ok = function (data) {
    var response = {
      status: 200,
      message: "Successfull",
      data: data,
    };
    return res.status(200).send(response);
  };
  next();
};
