const i18n = require('i18n');
module.exports = function (message, err = null) {
    return {
        status: 400,
        message: message ? message : i18n.__('ValidationError'),
        validationErrors: err ? err.errors : err
    }
};