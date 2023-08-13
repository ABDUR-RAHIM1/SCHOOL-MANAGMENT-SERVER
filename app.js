const express = require("express")
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const studentRouter = require('./routes/student.route')
const resultRouter = require("./routes/result.route")
const dueRouter = require("./routes/due.route")
const noticeRouter = require("./routes/notice.route")
const settingsRouter = require("./routes/settings.route")
const adminRouter = require("./routes/admin.route")
const studentLoginRouter = require("./routes/studenLogin.route")
const complainRouter = require("./routes/complain.route")
const chatRoute = require("./routes/chat.route")
const contactRouter = require("./routes/contact.route")

// studnet router
app.use("/api/student", studentRouter)
app.use("/api/result", resultRouter)
app.use("/api/due", dueRouter)
app.use("/api/notice", noticeRouter)
app.use("/api/settings", settingsRouter)
app.use("/api/admin", adminRouter)
app.use("/api/student/profile",studentLoginRouter)
app.use("/api/complain", complainRouter)
app.use("/api/chat", chatRoute)
app.use("/api/contact", contactRouter)

app.use("/*", (req, res)=>{
    res.status(404).json({
       message :" Route not found"
    })
})


module.exports = app