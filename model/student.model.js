const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    phone : {type : Number, required : true},
    roll : {type : Number, required : true},
    class : {type : String, required : true},
    group : {type : String, required : true},
    session : {type : String, required : true},
    bloodGroup : {type : String, required : true},
    address : {type : String, required : true},
    birthDate : {type : String, required : true},
    guardianName : {type : String, required : true},
    guardianEmail : {type : String},
    guardianPhone:  {type : Number},
    emergencyContact:  {type : Number, required : true},
    religion:  {type : String, required : true},
    photo : {type : String},
    admissionDate:  {type : Date, default : Date.now},
})
const Student = mongoose.model("student", studentSchema)
module.exports = Student