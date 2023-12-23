const express = require("express");
const { updateUser } = require("../controllers/userController.js");
const { addPaymentMethod } = require("../controllers/paymentController.js");

const router = express.Router();

router.patch("/:id", updateUser);
router.post("/:id/addCard", addPaymentMethod);

module.exports = router;
