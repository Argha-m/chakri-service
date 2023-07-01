module.exports = function(messsage){
    return {
        status: 403,
        message: messsage ? messsage : i18n.__('UnauthorizedAccess'),
    }
}