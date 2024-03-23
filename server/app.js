const express = require("express");
const { SERVER_PORT } = require("./config/constants");
const startDB = require("./config/database");

const app = express();

run();

async function run() {
  startDB();
  app.listen(SERVER_PORT, () => console.log("Server On.."));
}
