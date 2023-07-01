dbConnection = require("../../database/database");

module.exports = {
  getUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * From user_tbl WHERE username = ?";
      dbConnection.query(query, [email], (err, insertData) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(insertData);
        }
      });
    });
  },
  registerUser: (userDetails) => {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT into user_tbl (username, password, name, roleid, company) VALUES(?)";
      dbConnection.query(query, [userDetails], (err, insertData) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(insertData);
        }
      });
    });
  },
};
