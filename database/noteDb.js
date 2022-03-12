const { models, connection } = require("./index");

module.exports = {
  createNote,
  deleteNote,
  editNote,
  getNote,
  getNotes
}

async function createNote(note) {
  await connection.init()
  const newNote = await models.note.create(note)
  return newNote
}

async function deleteNote(id) {
  await connection.init()
  return await models.note.deleteOne({_id: id})
}

async function editNote({id, payload}) {
  await connection.init()
  const editedNote = await models.note.findOneAndUpdate({ _id: id }, { payload })
  return editedNote
}

async function getNote(id) {
  await connection.init()
  return await models.note.findById({ _id: id })
}

async function getNotes() {
  await connection.init()
  return await models.note.find({})
}
