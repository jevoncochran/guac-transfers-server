import db from "../data/dbConfig.js";

const getBanks = async (country) => {
  return db("banks").where(country);
};

const getBanksThatOfferCashPickup = async (country) => {
  return db("banks").where(country).where({ isCashPickupSite: true });
};

export default { getBanks, getBanksThatOfferCashPickup };
