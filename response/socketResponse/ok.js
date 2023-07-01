module.exports = function(message, data){
    return {
        status: 200,
        message: message ? message : i18n.__('SuccessMsg'),
        data: data
    }
}