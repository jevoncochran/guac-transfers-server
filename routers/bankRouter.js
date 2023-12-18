import express from "express";
import { getBanks } from "../controllers/bankController.js";

const router = express.Router();

router.get("/", getBanks);

export default router;
