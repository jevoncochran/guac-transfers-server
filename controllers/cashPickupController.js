import * as cashPickupService from "../services/cashPickupService.js";

// @desc Get cash pickup sites
// @route GET /api/cash-pickup-sites
// @access Private
const getCashPickupSites = async (req, res) => {
  const { country } = req.query;

  try {
    const cashPickupSites = await cashPickupService.getCashPickupSites({
      country,
    });

    res.status(200).json(cashPickupSites);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errMsg: "Unable to retrieve cash pickup sites" });
  }
};

export { getCashPickupSites };
