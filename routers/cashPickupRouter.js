const express = require("express");
const {
  getCashPickupSites,
} = require("../controllers/cashPickupController.js");

const router = express.Router();

router.get("/", getCashPickupSites);

module.exports = router;
