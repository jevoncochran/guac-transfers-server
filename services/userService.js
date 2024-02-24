const Users = require("../models/userModel.js");

const updateUser = async (body) => {
  const { userId, updates } = body;

  return Users.updateUser({ userId, updates });
};

const getTransfersByUser = async (userId) => {
  return Users.getTransfersByUser(userId);
};

module.exports = { updateUser, getTransfersByUser };
