import express from "express";
import { getCashPickupSites } from "../controllers/cashPickupController.js";

const router = express.Router();

router.get("/", getCashPickupSites);

export default router;
