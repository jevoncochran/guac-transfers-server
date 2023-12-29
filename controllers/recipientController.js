const authService = require("../services/authService.js");
const recipientService = require("../services/recipientService.js");

// @desc Create recipient
// @route POST /api/recipients
// @access Private
const createRecipient = async (req, res) => {
  let {
    senderId,
    recipientFirstName,
    recipientLastName,
    deliveryMethod,
    institutionId,
    institution,
    recipientAccountNumber,
    recipientPhone,
    recipientStreetAddress,
    recipientCity,
    recipientState,
  } = req.body;

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
      deliveryMethod,
      institutionId,
      institution,
      recipientAccountNumber,
      recipientPhone,
      recipientStreetAddress,
      recipientCity,
      recipientState,
    });
    res.status(201).json(newRecipient);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errMsg: "Unable to create recipient" });
  }
};

// @desc Get recipients
// @route GET /api/recipients?senderId=${senderId}
// @access Private
const getRecipientsBySender = async (req, res) => {
  let { senderId } = req.query;

  //   Check that sender exists
  const senderExists = await authService.findUserBy({ id: senderId });

  if (!senderExists) {
    res.status(400).json({ errMsg: "Sender not found" });
  }

  try {
    const recipients = await recipientService.getRecipientsBySender(senderId);
    res.status(200).json(recipients);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errMsg: "Unable to retrieve recipients" });
  }
};

module.exports = { createRecipient, getRecipientsBySender };
