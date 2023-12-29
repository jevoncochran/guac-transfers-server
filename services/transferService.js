const Transfers = require("../models/transferModel.js");
const recipientService = require("../services/recipientService.js");

const completeTransfer = async (transfer) => {
  let { senderId, recipientId, recipientFirstName, recipientLastName } =
    transfer;

  if (!recipientId) {
    const newRecipient = await recipientService.createRecipient({
      senderId,
      recipientFirstName,
      recipientLastName,
    });
    transfer.recipientId = newRecipient.id;
  }

  return Transfers.completeTransfer(transfer);
};

module.exports = { completeTransfer };
