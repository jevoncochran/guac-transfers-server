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
    console.log(err);
    res.status(500).json({ errMsg: "Unable to update user" });
  }
};

module.exports = { updateUser };
