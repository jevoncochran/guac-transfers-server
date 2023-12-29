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
    recipientPhone,
    recipientStreetAddress,
    recipientCity,
    recipientState,
  } = transfer;

  if (!recipientId) {
    const newRecipient = await recipientService.createRecipient({
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
    });
    transfer.recipientId = newRecipient.id;
  }

  return Transfers.completeTransfer(transfer);
};

module.exports = { completeTransfer };
