const Transfers = require("../models/transferModel.js");

const completeTransfer = async (transfer) => {
  // if (!transfer.recipientId) {
  //   await 
  // }
  return Transfers.completeTransfer(transfer);
};

module.exports = { completeTransfer };
