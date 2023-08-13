const mongoose  = require("mongoose");

const StudentProfileSchema = mongoose.Schema({
    name:  {type: String,required :true},
    email:  {type: String,required :true},
    password:  {type: String,required :true},
    image:  {type: String},
    date : {type : Date, default:Date.now}
});

const StudentProfile =  mongoose.model("studentProfile", StudentProfileSchema);

module.exports = StudentProfile;