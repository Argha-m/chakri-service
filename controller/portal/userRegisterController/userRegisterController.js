const { createPassword } = require("../../../middleware/index");

module.exports = {
  addUser: (req, res, userModel) => {
    const { username, password, name, roleid, company } = req.body;
    try {
      if (!username) {
        return res.badRequest("Email is required");
      } else if (!password) {
        return res.badRequest("Password is required");
      } else if (!name) {
        return res.badRequest("Name is required");
      } else if (!roleid) {
        return res.badRequest("Roleid is required");
      } else if (!company) {
        return res.badRequest("Company is required");
      } else {
        userModel.getUserByEmail(username).then((userData) => {
          if (userData.length > 0) {
            return res.badRequest("User already Exist.");
          } else {
            createPassword(password, function (err, encryptPass) {
              if (err) {
                return res.serverError(err);
              } else {
                let userData = [username, encryptPass, name, roleid, company];
                userModel.registerUser(userData).then(
                  (user) => {
                    return res.ok({ userid: user.insertId });
                  },
                  (err) => {
                    return res.serverError(err);
                  }
                );
              }
            });
          }
        });
      }
    } catch (err) {
      return res.serverError(err);
    }
  },
};
