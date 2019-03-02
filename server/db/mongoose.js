const mongoose = require("mongoose");

// this is our MongoDB database
const DATABASE_NAME = "mykinoplex";
const CONNECTION_URL =
  "mongodb://sandesh:mykinoplex@cluster0-shard-00-00-3jf5h.mongodb.net:27017,cluster0-shard-00-01-3jf5h.mongodb.net:27017,cluster0-shard-00-02-3jf5h.mongodb.net:27017/" +
  DATABASE_NAME +
  "?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

mongoose.Promise = global.Promise;
// connects our back end code with the database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true });

let db = mongoose.connection;
db.useDb(DATABASE_NAME);

module.exports = { mongoose };