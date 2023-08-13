const { getStudent, createStudent, updateStudent, deleteStudent } = require("../controllers/student.controller");

const router = require("express").Router();

router.get("/",getStudent)

router.post("/", createStudent)

router.put("/:id", updateStudent)

router.delete("/:id", deleteStudent)


module.exports = router