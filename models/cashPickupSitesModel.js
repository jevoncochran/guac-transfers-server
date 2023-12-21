const db = require("../data/dbConfig.js");

const getCashPickupSites = async (country) => {
  return db("cash_pickup_sites").where(country);
};

module.exports = { getCashPickupSites };
