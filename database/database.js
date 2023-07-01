const constant = require("../config/constant");
const mysql = require("mysql");

const settings = {
  host: constant.sqlHost,
  user: constant.sqlUser,
  password: constant.sqlPassword,
  database: constant.sqlDBName,
  connectionLimit: process.env.NODE_ENV === "development" ? 20 : 50,
};

const db = mysql.createPool(settings);

module.exports = db;
