require('dotenv').config();

const mongoose = require('mongoose');

exports.init = async function () {
  const connection = await mongoose.connect(
    process.env.MONGO_CONNECTION_STRING,
    { useNewUrlParser: true, useUnifiedTopology: true, connectTimeoutMS: 30000, keepAlive: 1, }
  ).then(mongoose => mongoose);
    return connection
}
exports.close = async function () {
  return mongoose.connection.close().catch((err) => {
    console.log("hello" + err);
  });
}