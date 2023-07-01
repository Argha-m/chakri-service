module.exports = function(message, data){
    return {
        status: 204,
        message: message ? message : i18n.__('NoDataFound'),
        data: data
    }
}