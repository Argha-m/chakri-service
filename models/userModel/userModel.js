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
};
