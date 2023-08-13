const mongoose = require("mongoose")

const dueSchema = mongoose.Schema({
    studentName: {type :String , required :true},
    studentClass: {type :String , required :true},
    itemName : {type : Array, required : true},
    itemPrice : {type : Number, required : true},
    itemQuntity : {type : Array, required : true},
    dueAt : {type: Date, default :Date.now}
})

const Due = mongoose.model("due" ,dueSchema)

module.exports = Due