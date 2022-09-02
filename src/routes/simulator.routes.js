const express = require("express");
const router = express.Router();

const { validateSchema } = require("src/middlewares");
const { creditSchema, updateCreditSchema } = require("src/schemas");

const { creditRequest, getCredit, deleteCredit, updateCredit } = require("src/controllers/simulator");

router.post("/credit", validateSchema(creditSchema) ,creditRequest);
router.get("/credit/:id", getCredit);
router.delete("/credit/:id", deleteCredit);
router.put("/credit/:id", validateSchema(updateCreditSchema), updateCredit);


module.exports = router;
