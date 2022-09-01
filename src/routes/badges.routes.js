const express = require("express");
const router = express.Router();

const { retrieveUF , retrieveCLP } = require("src/controllers/badges")

router.get("/uf/:quantity", retrieveUF);
router.get("/clp/:amount", retrieveCLP);

module.exports = router;