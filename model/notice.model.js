const mongoose = require("mongoose");

const noticeSchema = mongoose.Schema({
    title : {type : String, required : true},
    desc : {type : String, required : true},
    publishedAt : {type : Date , default : Date.now}
});

const Notice = mongoose.model("notice", noticeSchema);
module.exports = Notice;