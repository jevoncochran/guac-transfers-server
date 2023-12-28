const db = require("../data/dbConfig.js");

const createRecipient = async (recipient) => {
  return (
    db("recipients")
      .insert(recipient, "id")
      .then((ids) => {
        const [id] = ids;
        return findRecipientById(id);
      })
  );
};

const findRecipientById = async (filter) => {
  return db("recipients").where(filter).first();
};

module.exports = { createRecipient, findRecipientById };
