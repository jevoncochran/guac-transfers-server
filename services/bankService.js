import Banks from "../models/bankModel.js";

const getBanks = async (country) => {
  return Banks.getBanks(country);
};

export { getBanks };
