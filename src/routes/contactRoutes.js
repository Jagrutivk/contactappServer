const express = require("express");
const contactController = require("../controllers/contactController");

const router = express.Router();

router.post("/contacts", contactController.createContact);
router.get("/contacts", contactController.getAllContacts);

module.exports = router;
