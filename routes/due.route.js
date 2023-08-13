const { getDue, createDue, updateDue, deleteDue } = require("../controllers/due.controller");

const router = require("express").Router()

router.get("/", getDue)
router.post("/", createDue)
router.put("/:id", updateDue)
router.delete("/:id", deleteDue)

module.exports = router;