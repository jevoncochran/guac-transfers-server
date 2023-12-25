const express = require("express");
const { completeTransfer } = require("../controllers/transferController.js");

const router = express.Router();

router.post("/", completeTransfer);

module.exports = router;
