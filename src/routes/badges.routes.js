const express = require("express");
const router = express.Router();

const { retrieveUF , retrieveCLP } = require("src/controllers/badges")

router.get("/uf/:amount", retrieveUF);
router.get("/clp/:quantity", retrieveCLP);

module.exports = router;