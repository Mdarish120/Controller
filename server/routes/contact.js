const express = require("express");
const Contact = require("../controllers/contact");

const router = express.Router(); // Invoke express.Router to create a router instance

router.post("/contact", Contact);

module.exports = router;
