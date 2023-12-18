import db from "../data/dbConfig.js";

const getBanks = async (country) => {
  return db("banks").where(country);
};

export default { getBanks };
