const Banks = require("../models/bankModel.js");
const CashPickupSites = require("../models/cashPickupSitesModel.js");

const getCashPickupSites = async (country) => {
  const banks = await Banks.getBanksThatOfferCashPickup(country);
  const otherSites = await CashPickupSites.getCashPickupSites(country);

  return { banks, otherSites };
};

module.exports = { getCashPickupSites };
