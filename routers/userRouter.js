const express = require("express");
const { updateUser } = require("../controllers/userController.js");
const {
  addPaymentMethod,
  getCards,
} = require("../controllers/paymentController.js");

const router = express.Router();

router.patch("/:id", updateUser);
router.post("/:id/addCard", addPaymentMethod);
router.get("/:id/cards", getCards);

module.exports = router;
