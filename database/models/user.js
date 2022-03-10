const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  profilePicture: String,
  username: String,
  favorites: Array,
  userBio: String,
  appTheme: {
    backgroundColor: String,
    textColor: String,
    noteBackground: String,
  },
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
