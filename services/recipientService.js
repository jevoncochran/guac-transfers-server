const Recipients = require("../models/recipientModel.js");

const createRecipient = async (recipient) => {
  const {
    senderId,
    recipientFirstName,
    recipientLastName,
    deliveryMethod,
    institutionId,
    institution,
    recipientAccountNumber,
    recipientPhone,
    recipientStreetAddress,
    recipientCity,
    recipientState,
  } = recipient;
  
  return Recipients.createRecipient({
    senderId,
    firstName: recipientFirstName,
    lastName: recipientLastName,
    deliveryMethod,
    institutionId,
    institution,
    accountNumber: recipientAccountNumber,
    phone: recipientPhone,
    streetAddress: recipientStreetAddress,
    city: recipientCity,
    state: recipientState,
  });
};

const getRecipientsBySender = async (senderId) => {
  return Recipients.getRecipientsBySender(senderId);
};

module.exports = { createRecipient, getRecipientsBySender };
