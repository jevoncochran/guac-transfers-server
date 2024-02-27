const Transfers = require("../models/transferModel.js");
const recipientService = require("../services/recipientService.js");

const completeTransfer = async (transfer) => {
  let {
    senderId,
    recipientId,
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
    transferCountry,
  } = transfer;

  if (!recipientId) {
    const newRecipient = await recipientService.createRecipient({
      // sent: Date.now() / 1000,
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
      recipientCountry: transferCountry,
    });

    transfer.recipientId = newRecipient.id;
  }

  return Transfers.completeTransfer(transfer);
};

module.exports = { completeTransfer };
