const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const convertCurrency = async (body) => {
  const { from, to, amount } = body;

  return axios
    .get(
      `https://api.exchangeratesapi.io/v1/convert?access_key=${process.env.EXCHANGE_RATES_API_KEY}&from=${from}&to=${to}&amount=${amount}`
    )
    .then((res) => {
      return res.data;
    });
};

module.exports = { convertCurrency };
