const Recipients = require("../models/recipientModel.js");

const createRecipient = async (senderId) => {
  return Recipients.createRecipient({ senderId });
};

module.exports = { createRecipient };
