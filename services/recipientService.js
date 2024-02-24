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
    recipientPhoneIso,
    recipientPhoneNum,
    recipientStreetAddress,
    recipientCity,
    recipientState,
    recipientCountry,
  } = recipient;

  return Recipients.createRecipient({
    senderId,
    firstName: recipientFirstName,
    lastName: recipientLastName,
    deliveryMethod,
    institutionId,
    institution,
    accountNumber: recipientAccountNumber,
    phoneIso: recipientPhoneIso,
    phoneNum: recipientPhoneNum,
    streetAddress: recipientStreetAddress,
    city: recipientCity,
    state: recipientState,
    country: recipientCountry,
  });
};

const getRecipientsBySender = async ({ senderId, country }) => {
  return Recipients.getRecipientsBySender({ senderId, country });
};

module.exports = { createRecipient, getRecipientsBySender };
