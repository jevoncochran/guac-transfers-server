const express = require("express");
const {
  updateUser,
  getTransfersByUser,
} = require("../controllers/userController.js");
const {
  addPaymentMethod,
  getCards,
} = require("../controllers/paymentController.js");

const router = express.Router();

router.patch("/:id", updateUser);
router.post("/:id/addCard", addPaymentMethod);
router.get("/:id/cards", getCards);
router.get("/:id/transfer-history", getTransfersByUser);

module.exports = router;
