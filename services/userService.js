const Users = require("../models/userModel.js");

const updateUser = async (body) => {
  const { userId, updates } = body;

  return Users.updateUser({ userId, updates });
};

module.exports = { updateUser };
