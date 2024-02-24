const db = require("../data/dbConfig.js");

const createRecipient = async (recipient) => {
  return db("recipients")
    .insert(recipient, "id")
    .then((ids) => {
      const [id] = ids;
      return findRecipientById(id);
    });
};

const findRecipientById = async (filter) => {
  return db("recipients").where(filter).first();
};

const getRecipientsBySender = async ({ senderId, country }) => {
  return db("recipients").where({ senderId }).where({ country });
};

module.exports = { createRecipient, findRecipientById, getRecipientsBySender };
