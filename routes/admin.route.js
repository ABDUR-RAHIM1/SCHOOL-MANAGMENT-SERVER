const { getAdmin, createAdmin, deleteAdmin, updateAdmin, loginAdmin, resetPassword } = require("../controllers/admin.controller");

const router = require("express").Router()


router.get("/", getAdmin)
router.post("/", createAdmin)
router.post("/login", loginAdmin)
router.post("/reset-password", resetPassword) 
router.delete("/:id", deleteAdmin)

module.exports = router;