import express from "express";
import cors from "cors";

import authRouter from "../routers/authRouter.js";

const server = express();

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.use("/api/auth", authRouter);

export default server;
