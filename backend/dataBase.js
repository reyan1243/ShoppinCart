require("dotenv").config();
const mongoose = require("mongoose");
const URI = process.env.URI
function DbConnect() {
  return mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = DbConnect();
