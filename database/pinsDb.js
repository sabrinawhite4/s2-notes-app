const { models, connection } = require("./index");

module.exports = {
  addPin,
  getPins,
  removePin
}

async function addPin({noteId, userId}) {
  await connection.init()
  const newPin = await models.pins.create({
    pin: noteId,
    pinnedBy: userId
  })
  return newPin
}

async function getPins() {
  await connection.init()
  const pins = await models.pins.find({}).populate('pin pinnedBy')
  return pins
}

async function removePin(id) {
  await connection.init()
  const pins = await models.pins.deleteOne({_id: id})
  return pins
}