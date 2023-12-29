const Recipients = require("../models/recipientModel.js");

const createRecipient = async (recipient) => {
  const { senderId, recipientFirstName, recipientLastName } = recipient;
  return Recipients.createRecipient({
    senderId,
    firstName: recipientFirstName,
    lastName: recipientLastName,
  });
};

module.exports = { createRecipient };
