const router = require("express").Router()
const { getNotice, creatNotice, updateNotice, deleteNotice } = require("../controllers/notice.controller")

router.get("/", getNotice)
router.post("/", creatNotice)
router.put("/:id", updateNotice)
router.delete("/:id", deleteNotice)


module.exports = router