const express = require("express");
const { convertCurrency } = require("../controllers/conversionController.js");

const router = express.Router();

router.get("/", convertCurrency);

module.exports = router;
