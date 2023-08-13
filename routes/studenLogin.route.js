const { getStudent, resggisterStudent, loginStudent, deleteStudent, updateStudent, resetPassword } = require("../controllers/studentLogin.controller");

const router=require("express").Router();

router.get("/",getStudent)
router.post("/",resggisterStudent)
router.post("/login",loginStudent)
router.post("/reset",resetPassword)
router.put("/:id",updateStudent)
router.delete("/:id",deleteStudent)

module.exports = router;