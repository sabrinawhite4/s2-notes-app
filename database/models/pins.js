const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PinsSchema = new Schema({
  pin: {type: Schema.Types.ObjectId, ref: 'Note'},
  pinnedBy: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.models.Pins || mongoose.model("Pins", PinsSchema);