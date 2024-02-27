const db = require("../data/dbConfig.js");
const dotenv = require("dotenv");

dotenv.config();

const completeTransfer = async (transfer) => {
  console.log("sent: ", transfer.sent);
  console.log("typeof sent: ", typeof transfer.sent);

  console.log("receiveAmount: ", transfer.receiveAmount);
  console.log("sendAmount: ", transfer.sendAmount);
  console.log("standardFee: ", transfer.standardFee);
  console.log("thirdPartyCharge: ", transfer.thirdPartyCharge);

  return (
    db("transfers")
      // .insert(transfer, "id")
      .insert(
        {
          // other fields...
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
      })
  );
};

const findTransferBy = async (filter) => {
  return db("transfers").where(filter).first();
};

module.exports = { completeTransfer, findTransferBy };
