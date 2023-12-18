import express from "express";
import cors from "cors";

import authRouter from "../routers/authRouter.js";
import userRouter from "../routers/userRouter.js";
import conversionRouter from "../routers/conversionRouter.js";
import bankRouter from "../routers/bankRouter.js";

const server = express();

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);
server.use("/api/convert", conversionRouter);
server.use("/api/banks", bankRouter);

export default server;
