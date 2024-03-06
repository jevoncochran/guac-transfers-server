const db = require("../data/dbConfig.js");
const dotenv = require("dotenv");

dotenv.config();

const completeTransfer = async (transfer) => {
  return db("transfers")
    .insert(
      {
        ...transfer,
        sent:
          process.env.NODE_ENV === "production"
            ? db.raw("to_timestamp(?)", [transfer.sent / 1000])
            : transfer.sent,
      },
      "id"
    )
    .then((ids) => {
      const [id] = ids;
      return findTransferBy(id);
    });
};

const findTransferBy = async (filter) => {
  return db("transfers").where(filter).first();
};

module.exports = { completeTransfer, findTransferBy };
