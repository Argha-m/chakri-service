module.exports = {
  login: (req, res, userAuth) => {
    const { email, password } = req.body;
    try {
      if (!email) {
        return res.badRequest("Email is required");
      } else if (!password) {
        return res.badRequest("Password is required");
      } else {
        userAuth.getUserByEmail(email).then((userData) => {
          if (!userData.length > 0) {
            return res.badRequest("User Does Not Exist.");
          } else {
            let user = userData[0];
            if (user.password !== password) {
              return res.badRequest("User password not matching.");
            } else {
              return res.send(user);
            }
          }
        });
      }
    } catch (err) {
      return res.serverError(err);
    }
  },
};
