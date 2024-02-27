const db = require("../data/dbConfig.js");

const completeTransfer = async (transfer) => {
  console.log("sent: ", transfer.sent);
  console.log("typeof sent: ", typeof transfer.sent);

  return (
    db("transfers")
      // .insert(transfer, "id")
      .insert(
        {
          // other fields...
          ...transfer,
          sent: transfer.sent / 1000,
        },
        "id"
      )
      .then((ids) => {
        const [id] = ids;
        return findTransferBy(id);
      })
  );
};

const findTransferBy = async (filter) => {
  return db("transfers").where(filter).first();
};

module.exports = { completeTransfer, findTransferBy };
