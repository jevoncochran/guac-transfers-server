import Banks from "../models/bankModel.js";
import CashPickupSites from "../models/cashPickupSitesModel.js";

const getCashPickupSites = async (country) => {
  const banks = await Banks.getBanksThatOfferCashPickup(country);
  const otherSites = await CashPickupSites.getCashPickupSites(country);

  return { banks, otherSites };
};

export { getCashPickupSites };
