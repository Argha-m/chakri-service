module.exports = function(req, res, next){
    res.noDataFound = function(data) {
        var response = {
            status: 204,
            message: res.__('NoDataFound'),
            data: data
        }
        return res.status(200).send(response);
    }
    next();
}