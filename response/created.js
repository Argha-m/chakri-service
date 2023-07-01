module.exports = function(req, res, next){
    res.created = function(data) {
        var response = {
            status: 200,
            message: res.__('SuccessMsg'),
            data: data
        }
        return res.status(201).send(response);
    }
    next();
}