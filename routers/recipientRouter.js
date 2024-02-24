const express = require("express");
const {
  createRecipient,
  getRecipientsBySender,
} = require("../controllers/recipientController");

const router = express.Router();

router.post("/", createRecipient);
router.get("/", getRecipientsBySender);

module.exports = router;
