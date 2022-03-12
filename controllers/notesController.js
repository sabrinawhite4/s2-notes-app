const {createNote, deleteNote, editNote, getNote, getNotes} = require('../database/noteDb')

module.exports = {
  createNote: async (req, res) => {
    try {
      res.response = await createNote(req.body)
      res.status(200).send(res.response)
    } catch (error) {
      res.status(400).send(error)
    }
  },
  deleteNote: async (req, res) => {
    try {
      res.response = await deleteNote(req.params.id)
      res.status(200).send(res.response)
    } catch (error) {
      console.error(error)
      res.status(400).send(error)
    }
  },
  editNote: async (req, res) => {
    try {
      res.response = await editNote(req.params.id)
      res.status(200).send(res.response)
    } catch (error) {
      console.error(error)
      res.status(400).send(error)
    }
  },
  getNote: async (req, res) => {
    try {
      res.response = await getNote(req.params.id)
      if(res.response) {
        res.status(200).send(res.response)
      } else {
        res.status(400).send({ error: "Note not found" });
      }
    } catch (error) {
      console.error(error)
      res.status(400).send(error)
    }
  },
  getNotes: async (req, res) => {
    try {
      res.response = await getNotes()
      res.status(200).send(res.response)
    } catch (error) {
      console.error(error)
      res.status(400).send(error)
    }
  }
}