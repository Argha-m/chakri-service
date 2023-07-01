module.exports = function (req, res, next) {
  res.noDataFound = function (data) {
    var response = {
      status: 204,
      message: "No Data Found",
      data: data,
    };
    return res.status(200).send(response);
  };
  next();
};
