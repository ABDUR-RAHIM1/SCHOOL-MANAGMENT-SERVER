const { getResullt, createResult, updateResult, deleteResult, getUniqueResult } = require("../controllers/result.controller");

const router = require("express").Router()

router.get("/", getResullt)
router.post("/student", getUniqueResult)
router.post("/", createResult)
router.put("/:id", updateResult)
router.delete("/:id", deleteResult)

module.exports = router;