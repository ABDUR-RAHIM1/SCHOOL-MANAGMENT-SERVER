const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
     name : {type : String, required : true},
     email : {type : String, unique : true , required : true},
     password : {type : String, required : true},
     image : {type : String},
     date : {type : Date,default : Date.now},
});

const Admin = mongoose.model("admin", adminSchema );
module.exports =Admin