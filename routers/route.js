const express = require("express");
const router = express.Router();

const { getAllDataStatic, getAllData } = require("../controllers/controller");

router.route("/").get(getAllData);
router.route("/static").get(getAllDataStatic);

module.exports = router;
