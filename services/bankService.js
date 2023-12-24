const Banks = require("../models/bankModel.js");

const getBanks = async (country) => {
  return Banks.getBanks(country);
};

module.exports = { getBanks };
