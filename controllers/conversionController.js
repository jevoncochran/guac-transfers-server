const conversionService = require("../services/conversionService.js");

const convertCurrency = async (req, res) => {
  const { from, to, amount } = req.query;

  try {
    const conversion = await conversionService.convertCurrency({
      from,
      to,
      amount,
    });

    res.status(200).json(conversion);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errMsg: "Unable to execute conversion" });
  }
};

module.exports = { convertCurrency };
