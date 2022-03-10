const {
  getUser,
  getUsers,
  updateUser,
  createUser,
} = require("../database/userDb");

const connection = require("./connection");
const { update } = require("./models/user");

connection.init().then(console.log("Connected!"));

// createUser({
//   firstName: "Spencer",
//   username: "spencer.",
//   userBio: "Resident Hipster",
//   appTheme: {
//     backgroundColor: "darkgray",
//     textColor: "azure",
//     noteBackground: "darkred",
//   },
// });

// getUser("spencer.").then((user) => console.log(user));

// getUsers().then((users) => console.log(users));

// updateUser("622956a0c46d9e454cf94852", {userBio: "I'm a beautiful girl from Brazil!"}).then((user) => console.log(user));