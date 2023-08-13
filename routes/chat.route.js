const { getChat, createChat, deleteChat } = require("../controllers/chat.controller")

const router = require("express").Router()

router.get("/", getChat)
router.post("/", createChat) 
router.delete("/:id", deleteChat)


module.exports =(router)