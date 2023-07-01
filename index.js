const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const responseTime = require("response-time");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./public/swagger.json");
const jobListRoutes = require("./routes/jobList");
const authRoutes = require("./routes/auth");
const jobCategoryRoutes = require("./routes/jobCategories");
const userRegisterRoutes = require("./routes/userRegister");
const responses = require("./response/index");

const app = express();

app.use(cors());

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const { PORT = 3050 } = process.env;

/**
 * Intialize dev logger
 */
function initDevLogger() {
  //   if (process.env.NODE_ENV === "development") {
  app.use(morgan("combined"));
  app.use(responseTime());
  //   }
}

/**
 * Initialize Response
 */
function initResponses() {
  for (const response in responses) {
    app.use(responses[response]);
  }
}

/**
 * Intialize body parser
 */
function initBodyParser() {
  app.use(
    bodyParser.json({
      limit: "50mb",
    })
  );
  app.use(
    bodyParser.urlencoded({
      extended: true,
      limit: "50mb",
    })
  );
}

/**
 * Intialize Header
 */
function initHeader() {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, apikey, token, accept-language"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "POST, GET, PUT, DELETE, OPTIONS"
    );
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Max-Age", "86400");
    next();
  });
}

/**
 * Initialize Database Connection
 */
function initDBConnection() {
  const db = require("./database/database");
}

function initStaicPath() {
  app.use("/auth", authRoutes);
  app.use("/job-list", jobListRoutes);
  app.use("/job-category", jobCategoryRoutes);
  app.use("/add-user", userRegisterRoutes);
}

// function initSwagger() {}

/**
 *  Initialize setup
 */
async function init() {
  initDevLogger();
  initHeader();
  initBodyParser();
  initResponses();
  initStaicPath();
  initDBConnection();
}

/**
 * Call init
 */
init();

// /**
//  * Start Server
//  */
app.listen(PORT, () => {
  console.log("Server Started " + PORT);
});
