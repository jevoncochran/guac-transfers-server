const db = require("../data/dbConfig.js");

const getBanks = async (country) => {
  return db("banks").where(country);
};

const getBanksThatOfferCashPickup = async (country) => {
  return db("banks").where(country).where({ isCashPickupSite: true });
};

module.exports = { getBanks, getBanksThatOfferCashPickup };
