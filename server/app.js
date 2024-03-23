const express = require("express");
const { SERVER_PORT } = require("./config/constants");

const app = express();

app.listen(SERVER_PORT, () => console.log("Server On.."));
