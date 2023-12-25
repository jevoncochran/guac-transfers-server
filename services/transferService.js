const Transfers = require("../models/transferModel.js");

const completeTransfer = async (transfer) => {
  return Transfers.completeTransfer(transfer);
};

module.exports = { completeTransfer };
