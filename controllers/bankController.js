import * as bankService from "../services/bankService.js";

// @desc Get banks
// @route GET /api/banks
// @access Private
const getBanks = async (req, res) => {
  const { country } = req.query;

  try {
    const banks = await bankService.getBanks({ country });

    res.status(200).json(banks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errMsg: "Unable to retrieve banks" });
  }
};

export { getBanks };
