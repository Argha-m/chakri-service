dbConnection = require("../../database/database");

module.exports = {
  getAllJobs: (count) => {
    return new Promise((resolve, reject) => {
      let countLimit = count > 0 ? "limit " + count : "";
      const query = "SELECT * From job_tbl " + countLimit;
      dbConnection.query(query, (err, jobData) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(jobData);
        }
      });
    });
  },
  getAllCategory: (count) => {
    return new Promise((resolve, reject) => {
      let countLimit = count > 0 ? "limit " + count : "";
      const query = "SELECT * From job_categories " + countLimit;
      dbConnection.query(query, (err, categoryData) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(categoryData);
        }
      });
    });
  },
};
