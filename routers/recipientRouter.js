const express = require("express");
const { createRecipient } = require("../controllers/recipientController");

const router = express.Router();

router.post("/", createRecipient);

module.exports = router;
