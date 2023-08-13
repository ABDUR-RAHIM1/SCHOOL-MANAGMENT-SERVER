const router = require("express").Router();
const { getContact, createContact, deleteContact } = require("../controllers/contact.controller");


router.get("/", getContact)
router.post("/", createContact)
router.delete("/:id", deleteContact)


module.exports = router