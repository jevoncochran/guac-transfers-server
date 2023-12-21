const bcrypt = require("bcryptjs");
const Users = require("../models/userModel.js");

const registerUser = async (user) => {
  let { password } = user;
  const hash = bcrypt.hashSync(password, 8);
  password = hash;

  return Users.registerUser({ ...user, password });
};

const findUserBy = async (filter) => {
  console.log("THIS IS WORKING");
  return Users.findUserBy(filter);
};

module.exports = { registerUser, findUserBy };
