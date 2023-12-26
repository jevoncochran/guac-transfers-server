const userService = require("../services/userService.js");
const authService = require("../services/authService.js");

// @desc Update user
// @route PATCH /api/users/:id
// @access Public
const updateUser = async (req, res) => {
  const { id } = req.params;

  let updates = req.body;

  // Check if user exists
  const userExists = await authService.findUserBy({ id });

  if (!userExists) {
    res.status(400).json({ errMsg: "User does not exist" });
  }

  try {
    const updated = await userService.updateUser({ userId: id, updates });

    res.status(201).json(updated);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errMsg: "Unable to update user" });
  }
};

// @desc Get transfers by user
// @route GET /api/users/:id/transfer-history
// @access Private
const getTransfersByUser = async (req, res) => {
  // TODO: Prevent users from retrieving transfers that they did not send
  const { id } = req.params;

  try {
    const transfers = await userService.getTransfersByUser(id);

    res.status(200).json(transfers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errMsg: "Unable to retrieve transfer history" });
  }
};

module.exports = { updateUser, getTransfersByUser };
