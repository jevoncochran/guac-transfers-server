const transferService = require("../services/transferService.js");

// @desc Create transfer
// @route POST /api/transfers/send
// @access Private
const completeTransfer = async (req, res) => {
  const data = req.body;

  try {
    const transfer = await transferService.completeTransfer(data);

    res.status(201).json(transfer);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errMsg: "Unable to complete transfer" });
  }
};

module.exports = { completeTransfer };
