const express = require("express");
const cors = require("cors");

const authRouter = require("../routers/authRouter.js");
const userRouter = require("../routers/userRouter.js");
const conversionRouter = require("../routers/conversionRouter.js");
const bankRouter = require("../routers/bankRouter.js");
const cashPickupRouter = require("../routers/cashPickupRouter.js");

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
server.use("/api/cash-pickup-sites", cashPickupRouter);

module.exports = server;
