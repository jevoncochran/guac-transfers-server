import db from "../data/dbConfig.js";

const getCashPickupSites = async (country) => {
  return db("cash_pickup_sites").where(country);
};

export default { getCashPickupSites };
