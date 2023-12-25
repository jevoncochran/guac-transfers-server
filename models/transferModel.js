const db = require("../data/dbConfig.js");

const completeTransfer = async (transfer) => {
  return db("transfers")
    .insert(transfer, "id")
    .then((ids) => {
      const [id] = ids;
      return findTransferBy(id);
    });
};

const findTransferBy = async (filter) => {
  return db("transfers").where(filter).first();
};

module.exports = { completeTransfer, findTransferBy };
