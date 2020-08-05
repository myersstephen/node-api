const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const dbconnection = require("./database/connection");

dotEnv.config(); //load the .env into process.env so we can use it later
const app = express();
const PORT = process.env.PORT || 3000; //try to fetch the port from process environment or default the port to 3000

/**
 * Database connection
 */
dbconnection();
/**
 * BuiltIn Middleware for handling json and url-encoded payload
 */
app.use(express.json()); //Request Content-Type "application/json"
app.use(express.urlencoded({ extended: true })); //Request Content-Type: "application/x-www-form-urlencoded"

/**
 * Third Party Middleware CORS - For any cross origin request
 * Cross-Origin Resource Sharing Enablement on server
 */
app.use(cors());
app.get("/", (request, response, next) => {
  response.send("Node API Server");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

/**
 * Global Error Handling Middleware for Express
 */
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {},
  });
});
