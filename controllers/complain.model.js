const mongoose = require("mongoose");

const complainScema = mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    title : {type : String, required : true},
    desc : {type : String, required : true},
    image : {type : String},
    date : {type :Date , default : Date.now}
});

const Complain = mongoose.model("complain", complainScema);
module.exports = Complain