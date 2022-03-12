const { getUser, getUsers, updateUser } = require("../database/userDb");

module.exports = {
  getUser: async (req, res) => {
    try {
      res.response = await getUser(req.params.username);
      if (res.response) {
        res.status(200).send(res.response)
      } else {
        res.status(400).send({ error: "User not found" });
      }
    } catch (error) {
      console.error(error)
      res.status(400).send(error)
    }
  },
  getUsers: async (req, res) => {
    try {
      res.response = await getUsers();
      res.status(200).send(res.response)
    } catch (error) {
      console.error(error)
      res.status(400).send(error)
    }
  },
  updateUser: async (req, res) => {
    try {
      res.response = await updateUser(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      console.error(error)
      res.status(400).send(error)
    }
  },
};
