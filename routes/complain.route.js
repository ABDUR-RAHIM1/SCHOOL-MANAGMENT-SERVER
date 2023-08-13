const router = require("express").Router();
const { getComplain, createComplain, deleteComplain } = require("../controllers/complain.controller");

router.get("/", getComplain)
router.post("/", createComplain) 
router.delete("/:id", deleteComplain)

module.exports = router;