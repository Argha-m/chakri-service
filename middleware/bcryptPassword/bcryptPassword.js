const bcrypt = require("bcrypt");

function createPassword(password, cb) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) {
        cb(err);
      } else {
        cb(null, hash);
      }
    });
  });
}

module.exports = createPassword;
