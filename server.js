const express = require("express");
const dotEnv = require("dotenv");
dotEnv.config(); //load the .env into process.env so we can use it later
const app = express();
const PORT = process.env.PORT || 3000; //try to fetch the port from process environment or default the port to 3000

app.get("/", (request, response, next) => {
  response.send("Node API Server");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
