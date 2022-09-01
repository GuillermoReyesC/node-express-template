const express = require("express");
const router = express.Router();

const { validateSchema } = require("src/middlewares");
const { creditSchema } = require("src/schemas");

const { creditRequest } = require("src/controllers/simulator");

router.post("/credit", validateSchema(creditSchema) ,creditRequest);

module.exports = router;
