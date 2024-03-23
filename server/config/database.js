const mongoose = require("mongoose");
const { DB_URL } = require("./constants");

async function startDB() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to DB..");
  } catch (error) {
    console.error(error);
    console.log("Can't connect to DB.");
  }
}

module.exports = startDB;
