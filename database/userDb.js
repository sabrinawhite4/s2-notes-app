const { models, connection } = require("./index");

module.exports = {
  createUser,
  getUser,
  getUsers,
  updateUser,
};

async function createUser(userObj) {
  await connection.init();
  const user = await models.user.create(userObj);
  return user;
}

async function getUser(username) {
  await connection.init();
  const user = await models.user.find({ username: username });
  return user[0];
}

async function getUsers() {
  await connection.init();
  const users = await models.user.find({}).select("username _id first_name");
  return users;
}

async function updateUser(id, userObj) {
  await connection.init();
  const user = await models.user.findOneAndUpdate(
    { _id: id },
    { $set: userObj },
    { new: true }
  );
  console.log(user);
  return user;
}
