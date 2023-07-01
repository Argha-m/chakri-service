module.exports = function(message, data){
    return {
        status: 201,
        message: message ? message : i18n.__('SuccessMsg'),
        data: data
    }
}