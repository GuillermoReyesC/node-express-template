const express = require("express");
const router = express.Router();

const badgesRouter = require("src/routes/badges.routes");
const simulatorRouter = require("src/routes/simulator.routes");

 router.use("/badges", badgesRouter);
router.use("/simulator", simulatorRouter);

module.exports = router;
