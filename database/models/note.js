const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  textField: {type: String, default: 'Howdy partner'},
  imageLinks: {type: [Schema.Types.String], default: []},
  likes: {type: [Schema.Types.ObjectId], ref: 'User', default: []},
  createdBy: {type: Schema.Types.ObjectId, ref: 'User'},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  canEdit: {type: Boolean, default: true}
})

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);