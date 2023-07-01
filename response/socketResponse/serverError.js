module.exports = function(message, err){
    return {
        status: 500,
        message: message ? message : i18n.__('ServerError'),
        error: err
    }
}