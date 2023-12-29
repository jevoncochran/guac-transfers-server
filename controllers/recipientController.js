const authService = require("../services/authService.js");
const recipientService = require("../services/recipientService.js");

// @desc Create recipient
// @route POST /api/recipients
// @access Private
const createRecipient = async (req, res) => {
  let { senderId, recipientFirstName, recipientLastName } = req.body;

  //   Check that sender exists
  const senderExists = await authService.findUserBy({ id: senderId });

  if (!senderExists) {
    res.status(400).json({ errMsg: "Sender not found" });
  }

  try {
    const newRecipient = await recipientService.createRecipient({
      senderId,
      recipientFirstName,
      recipientLastName,
    });
    res.status(201).json(newRecipient);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errMsg: "Unable to create recipient" });
  }
};

module.exports = { createRecipient };
